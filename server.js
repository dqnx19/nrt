const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
app.use(express.json());

const db = new Database('database.db');

app.get("/", (res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.static(__dirname));

app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});