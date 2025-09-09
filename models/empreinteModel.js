const db = require('../db');

const Empreinte = {
  getAll: (callback) => {
    db.query('SELECT * FROM empreintes', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM empreintes WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    db.query(
      'INSERT INTO empreintes (template, dateCapture, statut) VALUES (?, NOW(), ?)',
      [data.template, data.statut || 1],
      callback
    );
  },

  update: (id, data, callback) => {
    db.query(
      'UPDATE empreintes SET template = ?, statut = ? WHERE id = ?',
      [data.template, data.statut, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM empreintes WHERE id = ?', [id], callback);
  }
};

module.exports = Empreinte;
