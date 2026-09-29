const express = require("express");
const dados = require("../dados.json")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const porta = 3000;

app.listen(porta, ()=>{
    console.log(`servidor: http://localhost:${porta}`)
})