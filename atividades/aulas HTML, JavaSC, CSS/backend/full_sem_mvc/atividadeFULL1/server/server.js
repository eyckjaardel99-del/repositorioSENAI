const express = require("express");

const cliente = require("../dados.json");

const mostrarIMC = (req, res) =>{
    calcularIMC()
    res.send(cliente)
}


const novaConsulta = (req, res) => {
    if(req.body){
        res.send("recebido")
        cliente.push(req.body)
    }else{
        res.send("erro");
    }
}

const calcularIMC = () =>{
    cliente.forEach(p=>{
        p.valorIMC = p.peso / p.altura**2
    })
}

const app = express();

app.use(express.urlencoded({extended:true}));
const porta = 3001;

app.post("/", novaConsulta)
app.get("/", mostrarIMC )

app.listen(porta, () => {
    console.log(`IMC: http://localhost:${porta}`)
})