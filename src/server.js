const express = require('express');
const cors = require('cors');
const app = require('./app'); // Importa o app
const routes = require('./routes/routes'); // Importa as rotas

// Configuração do CORS
app.use(cors({
  origin: '*', // Permite o frontend acessar o backend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
}));

// Use as rotas
app.use('/api', routes);

// Inicie o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
