const express = require('express');
const UsuarioController = require('../controllers/usuario.controller');

const router = express.Router();

// Definir as rotas
router.post('/usuarios', UsuarioController.createUsuario);
router.get('/usuarios', UsuarioController.getUsuarios);
router.get('/usuarios/:id', UsuarioController.getUsuarioById);
router.put('/usuarios/:id', UsuarioController.updateUsuario);
router.delete('/usuarios/:id', UsuarioController.deleteUsuario);

module.exports = router;
