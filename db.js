// db.js
const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Ton utilisateur MySQL
    password: "", // Ton mot de passe MySQL
    database: "controleacces" // Nom de ta BDD
});

db.connect(err => {
    if (err) {
        console.error("Erreur connexion MySQL:", err);
    } else {
        console.log("✅ Connecté à MySQL");
    }
});

module.exports = db;

