const SolicitacoesService = require('../services/solicitacoes.service');

module.exports = {
    async createSolicitacao(req, res) {
        try {
            const novaSolicitacao = await SolicitacoesService.createSolicitacao(req.body);
            res.status(201).json(novaSolicitacao);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar solicitação.' });
        }
    },

    async getSolicitacoes(req, res) {
        try {
            const solicitacoes = await SolicitacoesService.getSolicitacoes();
            res.json(solicitacoes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar solicitações.' });
        }
    },

    async getSolicitacaoById(req, res) {
        try {
            const solicitacao = await SolicitacoesService.getSolicitacaoById(req.params.id);
            if (solicitacao) {
                res.json(solicitacao);
            } else {
                res.status(404).json({ error: 'Solicitação não encontrada.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar solicitação.' });
        }
    },

    async updateSolicitacao(req, res) {
        try {
            const solicitacaoAtualizada = await SolicitacoesService.updateSolicitacao(req.params.id, req.body);
            if (solicitacaoAtualizada) {
                res.json(solicitacaoAtualizada);
            } else {
                res.status(404).json({ error: 'Solicitação não encontrada.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao atualizar solicitação.' });
        }
    },

    async deleteSolicitacao(req, res) {
        try {
            const solicitacaoDeletada = await SolicitacoesService.deleteSolicitacao(req.params.id);
            if (solicitacaoDeletada) {
                res.json({ message: 'Solicitação deletada com sucesso.' });
            } else {
                res.status(404).json({ error: 'Solicitação não encontrada.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar solicitação.' });
        }
    },
};