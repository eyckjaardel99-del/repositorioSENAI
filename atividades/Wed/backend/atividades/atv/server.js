require('dotenv').comfig();

const express = require('express');

const cors = require('cors');

const produtosRoutes = require('./routes/produtoRoutes')

const app = express()
app.use(cors());

app.use(express.json());

app.use(express.static('public'));

app.use('api/produtos', produtosRoutes);

app.get('api/produtos', produtosRoutes);

const port = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`servidor rodando em http://localhost:${PORT}`)
})