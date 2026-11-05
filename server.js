const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const bcrypt = require("crypto");
const { error } = require('console');
const os = require("os")
const fs = require("fs")

const app = express();
app.use(express.json());

const nrtDIRECTORY = path.join(os.homedir(), ".nrt");
fs.mkdirSync(nrtDIRECTORY, { recursive: true });
const dbPath = path.join(nrtDIRECTORY, "database.db");
const db = new Database(dbPath);

db.exec(`
    CREATE TABLE IF NOT EXISTS USERS (
	"id"	INTEGER,
	"username"	TEXT NOT NULL UNIQUE,
	"password_hash"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS "TICKETS" (
	"user_id"	INTEGER NOT NULL,
	"zones"	INTEGER,
	"zone_marked"	TEXT,
	"date_marked"	TEXT,
	"time_marked"	TEXT
);
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS "SESSIONS" (
	"user_id"	INTEGER NOT NULL,
	"text_hash"	TEXT NOT NULL UNIQUE
);
`);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/status", (req, res) => {
    res.status(200).json({ status: "active"})
})

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

app.post("/api/login", async (req, res) => {
    const startTime = Date.now();
    const { username, password } = req.body;

    const user = db.prepare(`
        SELECT * FROM USERS WHERE username = ?
    `).get(username);

    let isValid = false;
    if (user) {
        isValid = await bcrypt.compare(password, user.password_hash);
    }

    // If either the user doesn't exist or the password didn't match, fail here
    if (!user || !isValid) {
        const elapsed = Date.now() - startTime;
        if (elapsed < 300) {
            await delay(300 - elapsed);
        }
        return res.status(401).json({
            status: "error",
            message: "Invalid username or password"
        });
    }

    const token = crypto.randomBytes(32).toString('hex');
    const hash = crypto.createHash('sha256').update(token).digest('hex');

    db.prepare(`
        INSERT INTO SESSIONS (user_id, text_hash)
        VALUES (?, ?)
    `).run(user.id, hash);

    return res.status(201).json({
        status: "success",
        token: token
    });
});

app.use(express.static(__dirname));

const port = 3000;
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");

    console.log("Port: " + port)
    console.log("NRT Directory: " + nrtDIRECTORY)
});