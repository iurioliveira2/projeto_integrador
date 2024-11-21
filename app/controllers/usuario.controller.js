const UsuarioService = require('../services/usuario.service');

module.exports = {
  async createUsuario(req, res) {
    try {
      const novoUsuario = await UsuarioService.createUsuario(req.body);
      res.status(201).json(novoUsuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
  },

  async getUsuarios(req, res) {
    try {
      const usuarios = await UsuarioService.getUsuarios();
      res.json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }
  },
};
