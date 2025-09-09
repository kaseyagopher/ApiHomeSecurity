const Empreinte = require('../models/empreinteModel');

module.exports = {
  getAllEmpreintes: (req, res) => {
    Empreinte.getAll((err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    });
  },

  getEmpreinteById: (req, res) => {
    const id = req.params.id;
    Empreinte.getById(id, (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results[0]);
    });
  },

  createEmpreinte: (req, res) => {
    const data = req.body; // data.template, data.statut
    Empreinte.create(data, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ id: result.insertId, ...data });
    });
  },

  updateEmpreinte: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Empreinte.update(id, data, (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Empreinte mise à jour !' });
    });
  },

  deleteEmpreinte: (req, res) => {
    const id = req.params.id;
    Empreinte.delete(id, (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Empreinte supprimée !' });
    });
  }
};
