const { PrismaClient } = require('@prisma/client');
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

    // Cria o usuário caso o e-mail não esteja em uso
    return prisma.usuario.create({
      data,
    });
  },

  async getUsuarios() {
    return prisma.usuario.findMany();
  },
};
