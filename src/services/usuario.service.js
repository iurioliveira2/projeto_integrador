const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

module.exports = {
  async createUsuario(data) {
    // Verifica se o e-mail já está cadastrado
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email: data.email },
    });

    if (usuarioExistente) {
      const error = new Error('Usuário já cadastrado com este e-mail.');
      error.code = 'P2002'; // Define um código para tratar o erro no controller
      throw error;
    }

    // Criptografa a senha antes de criar o usuário
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.senha, salt);
    data.senha = hashedPassword;

    // Cria o usuário caso o e-mail não esteja em uso
    return prisma.usuario.create({
      data,
    });
  },

  async getUsuarios() {
    return prisma.usuario.findMany();
  },

  async deleteUsuario(id) {
    // Verifica se o usuário existe
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { idUsuario: parseInt(id) },
    });
  
    if (!usuarioExistente) {
      const error = new Error('Usuário não encontrado.');
      error.code = 'P2001'; // Define um código para tratar o erro no controller
      throw error;
    }
  
    // Deleta o usuário
    return prisma.usuario.delete({
      where: { idUsuario: parseInt(id)},
    });
  },

  async updateUsuario(id, data) {
    // Verifica se o usuário existe
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { idUsuario: id },
    });

    if (!usuarioExistente) {
      const error = new Error('Usuário não encontrado.');
      error.code = 'P2001'; // Define um código para tratar o erro no controller
      throw error;
    }

    // Se a senha estiver presente nos dados, criptografa a nova senha
    if (data.senha) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(data.senha, salt);
      data.senha = hashedPassword;
    }

    // Atualiza o usuário
    return prisma.usuario.update({
      where: { idUsuario: id },
      data,
    });
  }
};