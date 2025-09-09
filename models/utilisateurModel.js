const db = require('../db');

const User = {
    getAll: (callback) => {
        db.query("SELECT * FROM utilisateur", (err, results) => {
            callback(err, results);
        });
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM utilisateur WHERE id = ?', [id], callback);
    },
    create: (data, callback) => {
        db.query(
            'INSERT INTO utilisateur (nom, prenom, idEmpreinte, dateEnregistrement, roleUtilisateur) VALUES (?, ?, ?, ?, ?)',
            [data.nom, data.prenom, data.idEmpreinte, data.dateEnregistrement, data.roleUtilisateur],
            callback
        );
    },
    update: (id, data, callback) => {
        db.query('UPDATE utilisateur SET nom = ?, prenom = ? WHERE id = ?', [data.nom, data.prenom, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM utilisateur WHERE id = ?', [id], callback);
    }
};

module.exports = User;
