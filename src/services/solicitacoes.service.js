const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    async createSolicitacao(data) {
        return prisma.SolicitacaoRecolha.create({
            data,
        });
    },

    async getSolicitacoes() {
        return prisma.SolicitacaoRecolha.findMany();
    },

    async getSolicitacaoById(id) {
        const solicitacao = await prisma.SolicitacaoRecolha.findUnique({
            where: { id: id },
        });

        if (!solicitacao) {
            const error = new Error('Solicitação não encontrada.');
            error.code = 'P2001';
            throw error;
        }

        return solicitacao;
    },

    async updateSolicitacao(id, data) {
        const solicitacaoExistente = await prisma.SolicitacaoRecolha.findUnique({
            where: { id: id },
        });

        if (!solicitacaoExistente) {
            const error = new Error('Solicitação não encontrada.');
            error.code = 'P2001';
            throw error;
        }

        return prisma.SolicitacaoRecolha.update({
            where: { id: id },
            data,
        });
    },

    async deleteSolicitacao(id) {
        const solicitacaoExistente = await prisma.SolicitacaoRecolha.findUnique({
            where: { id: id },
        });

        if (!solicitacaoExistente) {
            const error = new Error('Solicitação não encontrada.');
            error.code = 'P2001';
            throw error;
        }

        return prisma.SolicitacaoRecolha.delete({
            where: { id: id },
        });
    },
};