const con = require('../config/db.js');


const listar = async () => {
    const [result] = await con.query(
        "SELECT * FROM filmes;"
    );
    return result;
};



module.exports = {
    cadastrar,
    listar,
    buscar,
    excluir,
    atualizar,
    alterar
};
