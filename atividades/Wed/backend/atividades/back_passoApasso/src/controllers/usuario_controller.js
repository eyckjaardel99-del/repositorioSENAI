const usuario = require("../models/usuario_models.js");

const cadastrar = async (req, res) =>{
    try{
       // const {nome, cpf, email, senha} = req.body;
        let rutorno = await usuario.cadastrar(req.body);
        res.json(rutorno).status(201).end()

    }
    catch( err){
        res.json({erro: err.message}).status(500).end();
    }

};

const listar = async (req, res) =>{
    try{
        const usuarios = await usuario.listar()
        res.status(200).json(usuarios).end();
    }
    catch( err){
        res.status(500).json({erro: err.message}).end();
    }
}

const buscar = async (req, res) =>{
    try {
        const id = req.params.id;
        const info = await usuario.buscar(id);

    if(info.length == 0){
            res.status(404).json({info: "usuaro nao encontrado"}).end();
        }
        else{
            //delete info(0).senha;
            res.status(200).json(info).end();
        }
    }
    catch( err){
        res.status(500).json({erro: err.message}).end();
    }
}


const excluir = async (req, res) =>{
    try{
        const id = req.params.id;
        const info = await usuario.excluir(id);
    
        res.status(200).json(info ).end();
    }
    catch ( err){
        res.status(500).json({erro: err.message}).end();
    }
}
const atualizar = async (req, res) =>{
    try{
    const id = req.params.id;
    const info = await usuario.atualizar(id);
        res.status(200).json(info ).end();
    }
    catch(err){
        res.status(500).json({erro: err.message}).end();
    }
}



module.exports = {
    cadastrar,
    listar,
    buscar,
    excluir,
    atualizar
};

