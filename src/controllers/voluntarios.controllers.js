const VoluntariosService = require('../services/voluntarios.service');

module.exports = {
    async createVoluntario(req, res) {
        try {
            const novoVoluntario = await VoluntariosService.createVoluntario(req.body);
            res.status(201).json(novoVoluntario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar voluntário.' });
        }
    },

    async getVoluntarios(req, res) {
        try {
            const voluntarios = await VoluntariosService.getVoluntarios();
            res.json(voluntarios);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar voluntários.' });
        }
    },

    async getVoluntarioById(req, res) {
        try {
            const voluntario = await VoluntariosService.getVoluntarioById(req.params.id);
            if (voluntario) {
                res.json(voluntario);
            } else {
                res.status(404).json({ error: 'Voluntário não encontrado.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar voluntário.' });
        }
    },

    async updateVoluntario(req, res) {
        try {
            const voluntarioAtualizado = await VoluntariosService.updateVoluntario(req.params.id, req.body);
            if (voluntarioAtualizado) {
                res.json(voluntarioAtualizado);
            } else {
                res.status(404).json({ error: 'Voluntário não encontrado.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao atualizar voluntário.' });
        }
    },

    async deleteVoluntario(req, res) {
        try {
            const voluntarioDeletado = await VoluntariosService.deleteVoluntario(req.params.id);
            if (voluntarioDeletado) {
                res.json({ message: 'Voluntário deletado com sucesso.' });
            } else {
                res.status(404).json({ error: 'Voluntário não encontrado.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar voluntário.' });
        }
    },
};