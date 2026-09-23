const express = require("express");
const jogador = require("../dados.json");

const moxtrarJUGADUR = (req, res) =>{
    calcularPontos()
    res.send(jogador);
}

const nuvuPEDIDO = (req, res)=>{
      if(req.body){
        res.send("Pedido recebido, em análise")
        jogador.push(req.body)
    }else{
        res.send("Erro ao receber pedido")
    }   
}

const calcularPontos = ()=>{
    jogador.forEach(p=>{
        p.resultado = (p.vitorias *3) + p.empates
    })
}

const app = express();
app.use(express.urlencoded({extended:true}))
const porta = 3002;

app.post("/", nuvuPEDIDO)
app.get("/", moxtrarJUGADUR);

app.listen(porta, ()=> {
    console.log(`servidor: http://localhost:${porta}`)
    console.log(`jogador: http://localhost:55/jogador/`)

});