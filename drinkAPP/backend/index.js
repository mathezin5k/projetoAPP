const express = require('express');
const cors = require('cors');
const app = express();

// Importa as rotas
const bebidaRoutes = require('./routes/bebidaRoute');
const ingredienteRoutes = require('./routes/ingredienteRoutes')
const authRoutes = require('./routes/auth');
const favoritosRoutes = require('./routes/favoritoRoute');

// Middlewares
app.use(cors()); // Libera a cesso externo (como o app mobile)
app.use(express.json()); // Permite ler JSON no corpo das requisições

// Rotas da API
app.use('/bebidas', bebidaRoutes);
app.use('/ingredientes', ingredienteRoutes);
app.use('/', authRoutes);
app.use('/favoritos', favoritosRoutes);

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
