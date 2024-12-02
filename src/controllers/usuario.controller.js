const UsuarioService = require('../services/usuario.service');

module.exports = {
  async createUsuario(req, res) {
    try {
      const novoUsuario = await UsuarioService.createUsuario(req.body);
      res.status(201).json(novoUsuario);
    } catch (error) {
      console.error(error);

      if (error.code === 'P2002') {
        // Código de erro do Prisma para violação de restrição única
        res.status(400).json({ error: 'Usuário já cadastrado com este e-mail.' });
      } else {
        res.status(500).json({ error: 'Erro ao criar usuário.' });
      }
    }
  },
  async getUsuarioById(req, res) {
    try {
      const usuario = await UsuarioService.getUsuarioById(req.params.id);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar usuário.' });
    }
  },

  async updateUsuario(req, res) {
    try {
      const usuarioAtualizado = await UsuarioService.updateUsuario(req.params.id, req.body);
      if (usuarioAtualizado) {
        res.json(usuarioAtualizado);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar usuário.' });
    }
  },

  async deleteUsuario(req, res) {
    try {
      const usuarioDeletado = await UsuarioService.deleteUsuario(req.params.id);
      if (usuarioDeletado) {
        res.json({ message: 'Usuário deletado com sucesso.' });
      } else {
        res.status(404).json({ error: 'Usuário não encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao deletar usuário.' });
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
