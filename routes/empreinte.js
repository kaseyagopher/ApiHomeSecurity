// Fichier : empreinteRoutes.js

const express = require('express');
const router = express.Router();
const empreinteController = require('../controllers/empreinteController');

// Récupérer toutes les empreintes
router.get('/empreintes', empreinteController.getAllEmpreintes);

// Récupérer une empreinte par ID
router.get('/:id', empreinteController.getEmpreinteById);

// Créer une nouvelle empreinte
router.post('/', empreinteController.createEmpreinte);

// Mettre à jour une empreinte existante
router.put('/:id', empreinteController.updateEmpreinte);

// Supprimer une empreinte
router.delete('/:id', empreinteController.deleteEmpreinte);

module.exports = router;