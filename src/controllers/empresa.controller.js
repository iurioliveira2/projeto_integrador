const EmpresasService = require('../services/empresas.service');

module.exports = {
    async createEmpresa(req, res) {
        try {
            const novaEmpresa = await EmpresasService.createEmpresa(req.body);
            res.status(201).json(novaEmpresa);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar empresa.' });
        }
    },

    async getEmpresas(req, res) {
        try {
            const empresas = await EmpresasService.getEmpresas();
            res.json(empresas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar empresas.' });
        }
    },

    async getEmpresaById(req, res) {
        try {
            const empresa = await EmpresasService.getEmpresaById(req.params.id);
            if (empresa) {
                res.json(empresa);
            } else {
                res.status(404).json({ error: 'Empresa não encontrada.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar empresa.' });
        }
    },

    async updateEmpresa(req, res) {
        try {
            const empresaAtualizada = await EmpresasService.updateEmpresa(req.params.id, req.body);
            if (empresaAtualizada) {
                res.json(empresaAtualizada);
            } else {
                res.status(404).json({ error: 'Empresa não encontrada.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao atualizar empresa.' });
        }
    },

    async deleteEmpresa(req, res) {
        try {
            const empresaDeletada = await EmpresasService.deleteEmpresa(req.params.id);
            if (empresaDeletada) {
                res.json({ message: 'Empresa deletada com sucesso.' });
            } else {
                res.status(404).json({ error: 'Empresa não encontrada.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar empresa.' });
        }
    },
};