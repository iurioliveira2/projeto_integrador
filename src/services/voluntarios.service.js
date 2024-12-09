const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    async createVoluntario(data) {
        return prisma.voluntario.create({
            data,
        });
    },

    async getVoluntarios() {
        return prisma.voluntario.findMany();
    },

    async getVoluntarioById(id) {
        const voluntario = await prisma.voluntario.findUnique({
            where: { id: id },
        });

        if (!voluntario) {
            const error = new Error('Voluntário não encontrado.');
            error.code = 'P2001'; // Define um código para tratar o erro no controller
            throw error;
        }

        return voluntario;
    },

    async updateVoluntario(id, data) {
        const voluntarioExistente = await prisma.voluntario.findUnique({
            where: { id: id },
        });

        if (!voluntarioExistente) {
            const error = new Error('Voluntário não encontrado.');
            error.code = 'P2001'; // Define um código para tratar o erro no controller
            throw error;
        }

        return prisma.voluntario.update({
            where: { id: id },
            data,
        });
    },

    async deleteVoluntario(id) {
        const voluntarioExistente = await prisma.voluntario.findUnique({
            where: { id: id },
        });

        if (!voluntarioExistente) {
            const error = new Error('Voluntário não encontrado.');
            error.code = 'P2001'; // Define um código para tratar o erro no controller
            throw error;
        }

        return prisma.voluntario.delete({
            where: { id: id },
        });
    },
};