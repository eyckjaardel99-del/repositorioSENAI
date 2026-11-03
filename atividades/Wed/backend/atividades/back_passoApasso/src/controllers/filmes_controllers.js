const usuario = require("../models/filmes_models.js");

const listar = async (req, res) =>{
    try{
        const filmes = await filmes.listar()
        res.status(200).json(filmes).end();
    }
    catch( err){
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

