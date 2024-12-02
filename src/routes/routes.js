const express = require('express');
const UsuarioController = require('../controllers/usuario.controller');
const SolicitacoesController = require('../controllers/solicitacoes.controller');
const VoluntariosController = require('../controllers/voluntarios.controller');
const EventosController = require('../controllers/eventos.controller');
const EmpresasController = require('../controllers/empresas.controller');

const router = express.Router();

//login
router.post('/login', UsuarioController.login);

// usuario
router.post('/usuarios', UsuarioController.createUsuario);
router.get('/usuarios', UsuarioController.getUsuarios);
router.get('/usuarios/:id', UsuarioController.getUsuarioById);
router.put('/usuarios/:id', UsuarioController.updateUsuario);
router.delete('/usuarios/:id', UsuarioController.deleteUsuario);

//solicitaçoes
router.post('/solicitacoes', SolicitacoesController.createSolicitacao);
router.get('/solicitacoes', SolicitacoesController.getSolicitacoes);
router.get('/solicitacoes/:id', SolicitacoesController.getSolicitacaoById);
router.put('/solicitacoes/:id', SolicitacoesController.updateSolicitacao);
router.delete('/solicitacoes/:id', SolicitacoesController.deleteSolicitacao);

//voluntarios
router.post('/voluntarios', VoluntariosController.createVoluntario);
router.get('/voluntarios', VoluntariosController.getVoluntarios);
router.get('/voluntarios/:id', VoluntariosController.getVoluntarioById);
router.put('/voluntarios/:id', VoluntariosController.updateVoluntario);
router.delete('/voluntarios/:id', VoluntariosController.deleteVoluntario);

//empresas
router.post('/empresas', EmpresasController.createEmpresa);
router.get('/empresas', EmpresasController.getEmpresas);
router.get('/empresas/:id', EmpresasController.getEmpresaById);
router.put('/empresas/:id', EmpresasController.updateEmpresa);
router.delete('/empresas/:id', EmpresasController.deleteEmpresa);

//eventos
router.post('/eventos', EventosController.createEvento);

module.exports = router;
