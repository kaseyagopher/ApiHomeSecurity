const User = require('../models/utilisateurModel');
module.exports = {
  getAllUsers : (req, res) => {
    User.getAll((err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    })
  },
  getUserById : (req, res) => {
    const id = req.params.id;
    User.getById(id, (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results[0]);
    });
  },
  getUserById : (req, res) => {
    const id = req.params.id;
    User.getById(id, (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results[0]);
    });
  },
  getUserById : (req, res) => {
    const id = req.params.id;
    User.getById(id, (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results[0]);
    });
  },
  createUser : (req, res) => {
    const data = req.body;
    User.create(data, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ id: result.insertId, ...data });
    });
  },
  updateUser :(req, res) => {
    const id = req.params.id;
    const data = req.body;
    User.update(id, data, (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Utilisateur mis à jour !' });
    })
  },
  deleteUser : (req, res) => {
    const id = req.params.id;
    User.delete(id, (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Utilisateur supprimé !' });
    });
  }
}