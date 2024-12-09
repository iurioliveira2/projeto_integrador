const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    async createEmpresa(data) {
        return prisma.empresa.create({
            data,
        });
    },

    async getEmpresas() {
        return prisma.empresa.findMany();
    },

    async getEmpresaById(id) {
        const empresa = await prisma.empresa.findUnique({
            where: { id: id },
        });

        if (!empresa) {
            const error = new Error('Empresa não encontrada.');
            error.code = 'P2001';
            throw error;
        }

        return empresa;
    },

    async updateEmpresa(id, data) {
        const empresaExistente = await prisma.empresa.findUnique({
            where: { id: id },
        });

        if (!empresaExistente) {
            const error = new Error('Empresa não encontrada.');
            error.code = 'P2001';
            throw error;
        }

        return prisma.empresa.update({
            where: { id: id },
            data,
        });
    },

    async deleteEmpresa(id) {
        const empresaExistente = await prisma.empresa.findUnique({
            where: { id: id },
        });

        if (!empresaExistente) {
            const error = new Error('Empresa não encontrada.');
            error.code = 'P2001';
            throw error;
        }

        return prisma.empresa.delete({
            where: { id: id },
        });
    },
};