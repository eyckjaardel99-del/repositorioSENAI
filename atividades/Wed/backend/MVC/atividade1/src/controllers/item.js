const items = require("../../dados/item.json");

const listar = (req, res)=>{
    res.json(items)
}



const criar = (req, res)=>{
    const dados = req.body;
        dados.id = Number(items[items.length -1].id) +1;
        items.push(dados)
        res.status(201).json(dados)
    
}

const alterar = (req, res)=>{
    let itemid = req.params.id
    novop = req.body;

    items.forEach((antigo)=>{

        if(itemid == antigo.id){
        antigo.cpf = novop.cpf;
        antigo.nome = novop.nome;

    }
    else{
        res.json("erro")
    }
    })
}
const alterarParte = (req, res)=>{
    const id = req.params.id;
    const informa = req.body;
    const busca = items.find((inf)=> inf.id == id);

    Object.keys(informa).forEach((i)=>{
        busca[i] = informa[i];
    })
    res.send("recebido")
    

}

const excluir = (req, res)=>{
    let id = req.params.id;
    items.forEach((item, indice)=>{
        if(item.id == id){
            items.splice(1, indice) 
        }
    })
    res.json("Apagou")
}





module.exports = {
    criar, listar, alterar, excluir, alterarParte
}