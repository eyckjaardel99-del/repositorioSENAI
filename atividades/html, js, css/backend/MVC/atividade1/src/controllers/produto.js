const produto = require("../../dados/produto.json");

const listar = (req, res)=>{
    res.json(produto)
}



const criar = (req, res)=>{
    const dados = req.body;
        dados.id = Number(produto[produto.length -1].id) +1;
        produto.push(dados)
        res.status(201).json(dados)
    
}

const alterar = (req, res)=>{
    let produtoid = req.params.id
    novop = req.body;

    produto.forEach((antigo)=>{

        if(produtoid == antigo.id){
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
    const busca = produto.find((inf)=> inf.id == id);

    Object.keys(informa).forEach((i)=>{
        busca[i] = informa[i];
    })
    res.send("recebido")
    

}

const excluir = (req, res)=>{
    let id = req.params.id;
    produto.forEach((cliente, indice)=>{
        if(cliente.id == id){
            produto.splice(1, indice) 
        }
    })
    res.json("Apagou")
}





module.exports = {
    criar, listar, alterar, excluir, alterarParte
}