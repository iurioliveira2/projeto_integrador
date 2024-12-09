const EventosService = require('../services/eventos.service');

module.exports = {
    async createEvento(req, res) {
        try {
            const novoEvento = await EventosService.createEvento(req.body);
            res.status(201).json(novoEvento);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar evento.' });
        }
    },

    async getEventos(req, res) {
        try {
            const eventos = await EventosService.getEventos();
            res.json(eventos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar eventos.' });
        }
    },

    async getEventoById(req, res) {
        try {
            const evento = await EventosService.getEventoById(req.params.id);
            if (evento) {
                res.json(evento);
            } else {
                res.status(404).json({ error: 'Evento não encontrado.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar evento.' });
        }
    }
};