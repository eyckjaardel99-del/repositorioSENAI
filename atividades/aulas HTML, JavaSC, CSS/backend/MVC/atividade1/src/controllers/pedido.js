const pedidos = require("../../dados/pedidos.json")

const listar = (req, res)=>{
    calcularTotal()

    res.json(pedidos)
}


const criar = (req, res)=>{
    const dados = req.body;
        dados.id = Number(pedidos[pedidos.length -1].id) +1;
        pedidos.push(dados)
        res.status(201).json(dados)
    
}

const alterar = (req, res)=>{
    let pedidoid = req.params.id
    let novop = req.body;

    pedidos.forEach((antigo)=>{

        if(pedidoid == antigo.id){
        antigo.cliente_id = novop.cliente_id;
        antigo.produto = novop.produto;
        antigo.preco = novop.preco;
        antigo.quantidade = novop.quantidade;
    }
    else{
        res.json("erro")
    }
    })
    

}

const excluir = (req, res)=>{
    let id = req.params.id;
    pedidos.forEach((pedido, indice)=>{
        if(pedido.id == id){
            pedidos.splice(1, indice) 
        }
    })
    res.json("Apagou")
}



function calcularTotal(){
    pedidos.forEach(p=>{
        p.subtotoal = p.preco* p.quantidade;

    })
}



module.exports ={
    criar, listar, alterar, excluir
}

