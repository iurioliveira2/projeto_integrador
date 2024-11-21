const express = require('express');
const UsuarioController = require('../controllers/usuario.controller');

const router = express.Router();

// Definir as rotas
router.post('/usuarios', UsuarioController.createUsuario);
router.get('/usuarios', UsuarioController.getUsuarios);

module.exports = router;