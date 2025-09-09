const express = require('express');
const router = express.Router();
const utilisateurController = require('../controllers/utilisateurController');

router.get('/users', utilisateurController.getAllUsers);
router.get('/:id', utilisateurController.getUserById);
router.post('/', utilisateurController.createUser);
router.put('/:id', utilisateurController.updateUser);
router.delete('/:id', utilisateurController.deleteUser);

module.exports = router;
