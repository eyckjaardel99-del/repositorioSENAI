const express = require("express");
const dados = require("../dados.json");

const mostrar = (req, res)=>{
    calculo();
    res.send(dados);
}

const novo = (req,res)=>{
    if(req.body){
        res.send("recebido, em analise");
        dados.push(req.body);
    }
    else{
        res.send("erro")
    }
}

const calculo = (req, res)=>{
    dados.forEach(p =>{
        p.subtotal = p.precoUnitario * p.quantidade;
    })
}

const excluir = (req, res)=>{
    const id = req.params.id;

    dados.forEach((dado, indice)=>{
        if (dado.id == id){
            dados.splice(indice, 1);
        }
    });

    res.send("excluido");
    
}

const alterar = (req, res)=>{
    const id = req.params.id;
    const dado = req.body;

    dados.forEach((dadoss) =>{
        if(dadoss.id == id){
            dadoss.nome = dado.nome;
            dadoss.precoUnitario = dado.precoUnitario;
            dadoss.quantidade = dado.quantidade;
            dadoss.unidade = dado.unidade;

        }
    }) 
    res.send("atualizado");

}

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const porta = 4000;

app.post("/", novo);
app.get("/", mostrar);
app.delete("/:id", excluir);
app.put("/:id", alterar);

app.listen(porta, ()=>{
    console.log(`servidor: http://localhost:${porta}`)
})



