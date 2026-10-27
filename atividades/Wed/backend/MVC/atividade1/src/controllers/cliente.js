const clientes = require("../../dados/cliente.json");

const listar = (req, res)=>{
    res.json(clientes)
}



const criar = (req, res)=>{
    const dados = req.body;
        dados.id = Number(clientes[clientes.length -1].id) +1;
        clientes.push(dados)
        res.status(201).json(dados)
    
}

const alterar = (req, res)=>{
    let clienteid = req.params.id
    novop = req.body;

    clientes.forEach((antigo)=>{

        if(clienteid == antigo.id){
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
    const busca = clientes.find((inf)=> inf.id == id);

    Object.keys(informa).forEach((i)=>{
        busca[i] = informa[i];
    })
    res.send("recebido")
    

}

const excluir = (req, res)=>{
    let id = req.params.id;
    clientes.forEach((cliente, indice)=>{
        if(cliente.id == id){
            clientes.splice(1, indice) 
        }
    })
    res.json("Apagou")
}





module.exports = {
    criar, listar, alterar, excluir, alterarParte
}