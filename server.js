const express = require('express');
const Database = require('better-sqlite3');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const path = require('path');
const os = require('os');
const { error } = require('console');
const fs = require("fs")

const app = express();
app.use(express.json());

const dbDir = path.join(os.homedir(), '.nrt');
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(dbDir, 'database.db');
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS sessions (
    userid INTEGER PRIMARY KEY,
    sessionid TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userid INTEGER NOT NULL,
    zones INTEGER NOT NULL,
    type TEXT NOT NULL,
	zonemarked TEXT NOT NULL,
	datemarked TEXT NOT NULL,
	timemarked TEXT NOT NULL,
    FOREIGN KEY (userid) REFERENCES users(id) ON DELETE CASCADE
);
`);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.static(__dirname));

app.get("/api/status", (req, res) => {
    // 1. Získáme sessionId z hlavičky Authorization
    const authHeader = req.headers.authorization;
    const sessionId = authHeader ? authHeader.replace('Bearer ', '') : null;

    let isLogged = false;

    // 2. Pokud sessionId existuje, ověříme ho v databázi
    if (sessionId) {
        const stmtSession = db.prepare('SELECT userid FROM sessions WHERE sessionid = ?');
        const session = stmtSession.get(sessionId);

        if (session) {
            isLogged = true;
        }
    }

    // 3. Vrátíme stav serveru a přihlášení
    return res.json({
        status: "running",
        logged: isLogged
    });
});

app.post("/api/register", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	if (!username || !password) {
		return res.status(400).json({ error: "Missing Username or password" });
	}

	const stmtCheck = db.prepare('SELECT * FROM users WHERE username = ?');
	const existingUser = stmtCheck.get(username);

	if (existingUser) {
		return res.status(400).json({ error: "Username already exists" });
	}

	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const stmtInsert = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
		const result = stmtInsert.run(username, hashedPassword);
		return res.status(201).json({
			message: "User registered successfully",
			userId: result.lastInsertRowid
		});

	} catch (err) {
		console.error("Chyba při registraci:", err);
		return res.status(500).json({ error: "Internal server error" });
	}
})

app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;

    // 1. Kontrola zadaných údajů
    if (!username || !password) {
        return res.status(400).json({ error: "Missing username or password" });
    }

    try {
        // 2. Vyhledání uživatele podle username
        const stmtUser = db.prepare('SELECT * FROM users WHERE username = ?');
        const user = stmtUser.get(username);

        // Pokud uživatel neexistuje, vrátíme chybu 401
        if (!user) {
            return res.status(401).json({ error: "Invalid username or password" });
        }

        // 3. Porovnání zadaného hesla s hašem v databázi
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Invalid username or password" });
        }

        // 4. Vygenerování unikátního Session ID (32 náhodných bajtů v hexu)
        const sessionId = crypto.randomBytes(32).toString('hex');

        // 5. Uložení nebo aktualizace session v tabulce sessions
        // Jelikož je 'userid' primární klíč, ON CONFLICT přepíše starou session novou
        const stmtSession = db.prepare(`
            INSERT INTO sessions (userid, sessionid) 
            VALUES (?, ?)
            ON CONFLICT(userid) DO UPDATE SET sessionid = excluded.sessionid
        `);
        stmtSession.run(user.id, sessionId);

        // 6. Navrácení sessionId klientovi
        return res.status(200).json({
            message: "Login successful",
            userId: user.id,
            sessionId: sessionId
        });

    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/api/logout", (req, res) => {
    // 1. Získáme sessionId – buď z hlavičky Authorization (np. "Bearer <token>"), nebo z těla req.body
    const authHeader = req.headers.authorization;
    const sessionId = authHeader ? authHeader.replace('Bearer ', '') : req.body.sessionId;

    if (!sessionId) {
        return res.status(400).json({ error: "Missing sessionId" });
    }

    try {
        // 2. Příprava DELETE dotazu podle sessionid
        const stmt = db.prepare('DELETE FROM sessions WHERE sessionid = ?');
        const result = stmt.run(sessionId);

        // 3. Kontrola, zda se vůbec nějaký řádek smazal
        if (result.changes === 0) {
            return res.status(404).json({ error: "Session not found or already logged out" });
        }

        return res.status(200).json({ message: "Successfully logged out" });

    } catch (err) {
        console.error("Logout error:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/api/buy-ticket", (req, res) => {
    // 1. Načtení sessionId z hlavičky Authorization nebo z těla požadavku
    const authHeader = req.headers.authorization;
    const sessionId = authHeader ? authHeader.replace('Bearer ', '') : req.body.sessionId;

    if (!sessionId) {
        return res.status(401).json({ error: "Unauthorized: Missing sessionId" });
    }

    // 2. Ověření tokenu v tabulce sessions a zjištění userid
    const stmtSession = db.prepare('SELECT userid FROM sessions WHERE sessionid = ?');
    const session = stmtSession.get(sessionId);

    if (!session) {
        return res.status(401).json({ error: "Unauthorized: Invalid or expired session" });
    }

    const userId = session.userid;

    // 3. Načtení dat o lístku z req.body
    const { zones, type, zonemarked, datemarked, timemarked } = req.body;

    // Validace povinných polí
    if (!zones || !type || !zonemarked || !datemarked || !timemarked) {
        return res.status(400).json({ error: "Missing required ticket parameters" });
    }

    try {
        // 4. Bezpečné vložení lístku spojeného s userId
        const stmtInsert = db.prepare(`
            INSERT INTO tickets (userid, zones, type, zonemarked, datemarked, timemarked)
            VALUES (?, ?, ?, ?, ?, ?)
        `);

        const result = stmtInsert.run(userId, zones, type, zonemarked, datemarked, timemarked);

        return res.status(201).json({
            message: "Ticket bought successfully",
            ticketId: result.lastInsertRowid,
            userId: userId
        });

    } catch (err) {
        console.error("Buy ticket error:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/api/get-tickets", (req, res) => {
    // 1. Získáme sessionId z hlavičky Authorization
    const authHeader = req.headers.authorization;
    const sessionId = authHeader ? authHeader.replace('Bearer ', '') : null;

    if (!sessionId) {
        return res.status(401).json({ error: "Unauthorized: Missing sessionId" });
    }

    try {
        // 2. Najdeme userid podle sessionid
        const stmtSession = db.prepare('SELECT userid FROM sessions WHERE sessionid = ?');
        const session = stmtSession.get(sessionId);

        if (!session) {
            return res.status(401).json({ error: "Unauthorized: Invalid session" });
        }

        // 3. Načteme všechny lístky daného uživatele (pomocí .all() pro získání pole)
        const stmtTickets = db.prepare('SELECT * FROM tickets WHERE userid = ?');
        const userTickets = stmtTickets.all(session.userid);

        // 4. Vrátíme přímo čisté pole [ {...}, {...} ]
        return res.json(userTickets);

    } catch (err) {
        console.error("Get tickets error:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});