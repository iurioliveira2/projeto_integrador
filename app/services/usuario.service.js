const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async createUsuario(data) {
    return prisma.usuario.create({
      data,
    });
  },

  async getUsuarios() {
    return prisma.usuario.findMany();
  },
};
