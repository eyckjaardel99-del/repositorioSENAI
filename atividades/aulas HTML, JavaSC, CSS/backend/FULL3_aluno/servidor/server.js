const express = require("express");
const aluno = require("../dados.json");

const mostrarMedia = (req, res)=>{
    calcularMedia()
    res.send(aluno)
}
const novaNota = (req, res)=>{
    if(req.body){
        res.send("pedido enviado, analise");
        aluno.push(req.body);
    }
    else{
        res.send("erro garaio")
    }
}

const calcularMedia = () => {
    aluno.forEach(p=>{
        p.mediaTotal = (parseFloat(p.nota1) + parseFloat(p.nota2) + parseFloat(+p.nota3))/3
    })
}


const app = express()
app.use(express.urlencoded({ extended:true}));
const porta = 3000;

app.get("/",mostrarMedia );
app.post("/", calcularMedia);
app.post("/",novaNota);

app.listen(porta, ()=> { 
    console.log(`servidor: http://localhost:${porta}`);
    console.log(`alunos: http://localhost:3000/alunos/aluno.html`);
})
