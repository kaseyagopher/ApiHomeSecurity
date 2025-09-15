const db = require('../db');

const Empreinte = {
    getAll: (callback) => {
        // La logique `(err, results)` de User.js est appliquée ici
        db.query('SELECT * FROM empreintedigital', (err, results) => {
            callback(err, results);
        });
    },
    getById: (id, callback) => {
        // La logique de User.js est appliquée ici pour le getById
        db.query('SELECT * FROM empreintedigital WHERE id = ?', [id], callback);
    },
    create: (data, callback) => {
        // La logique de User.js est appliquée ici
        db.query(
            'INSERT INTO empreintedigital (template, dateCapture, statut) VALUES (?, ?, ?)',
            [data.template, data.dateCapture, data.statut],
            callback
        );
    },
    update: (id, data, callback) => {
        // La logique de User.js est appliquée ici
        db.query(
            'UPDATE empreintedigital SET template = ?, dateCapture = ?, statut = ? WHERE id = ?',
            [data.template, data.dateCapture, data.statut, id],
            callback
        );
    },
    delete: (id, callback) => {
        // La logique de User.js est appliquée ici
        db.query('DELETE FROM empreintedigital WHERE id = ?', [id], callback);
    }
};

module.exports = Empreinte;