const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    async createEvento(data) {
        return prisma.evento.create({
            data,
        });
    },

    async getEventos() {
        return prisma.evento.findMany();
    },

    async getEventoById(id) {
        const evento = await prisma.evento.findUnique({
            where: { id: id },
        });

        if (!evento) {
            const error = new Error('Evento não encontrado.');
            error.code = 'P2001'; // Define um código para tratar o erro no controller
            throw error;
        }

        return evento;
    },

    async updateEvento(id, data) {
        const eventoExistente = await prisma.evento.findUnique({
            where: { id: id },
        });

        if (!eventoExistente) {
            const error = new Error('Evento não encontrado.');
            error.code = 'P2001'; // Define um código para tratar o erro no controller
            throw error;
        }

        return prisma.evento.update({
            where: { id: id },
            data,
        });
    },

    async deleteEvento(id) {
        const eventoExistente = await prisma.evento.findUnique({
            where: { id: id },
        });

        if (!eventoExistente) {
            const error = new Error('Evento não encontrado.');
            error.code = 'P2001'; // Define um código para tratar o erro no controller
            throw error;
        }

        return prisma.evento.delete({
            where: { id: id },
        });
    },
};