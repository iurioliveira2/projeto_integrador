const app = require('./app');
const routes = require('./routes/routes');

// Use as rotas
app.use('/api', routes);

// Inicie o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
