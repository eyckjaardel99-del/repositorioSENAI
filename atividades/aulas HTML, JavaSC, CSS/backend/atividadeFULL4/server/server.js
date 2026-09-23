const express = require("express");
const items = require("../dados.json");

const mostrar =(req, res)=>{
   res.send(items) 

   
}

const mostrarId = (req,res)=>{
    const id = req.params.id;

    items.forEach((item) => {
        if(item.id == id){
            res.send(item)
        }
    })
    res.status(404).send("item nn encontrado")

}



const novo =(req, res)=>{
    if(req.body){
        res.send("pedido recebido")
        items.push(req.body);

    }
    else{
        res.send("erro ao enviar");
    }

}


const alterar = (req, res)=>{
    const id = req.params.id;
    const dados = req.body;

    items.forEach((item)=>{
        if(item.id == id){
            item.item = dados.item;
            item.local = dados.local;
            item.dataRegistro = dados.dataRegistro;
            item.valor = dados.valor;
            item.patrimonio = dados.patrimonio;
        }
    })
    res.send("atualizado")

}

const remover = (req, res)=>{
    const id = req.params.id;

    items.forEach((dado, indice)=>{
        if (dado.id == id){
            items.splice(indice, 1);
        }
    });

    res.send("excluido");
    
}

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const porta = 3000;

app.get("/:id", mostrar);
app.get("/:id", mostrarId);
app.post("/", novo);
app.delete("/:id", remover);
app.put("/:id", alterar);


app.listen(porta, ()=>{
    console.log(`servidor: http://localhost:${porta}`)
})