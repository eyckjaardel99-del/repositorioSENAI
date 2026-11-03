const con = require('../config/db.js');


//requisição --> Header, body{nome:, email:,...}, footer(finalização da requisição)
const cadastrar = async ({nome, cpf, email, senha}) => {
    const [result] = await con.query(
        "INSERT INTO usuarios VALUES (DEFAULT, ?, ?, ?, ?)",//dados de inserção
        [nome, cpf, email, senha]
    );

    return {
        id:result.insertId,
        nome: nome,
        cpf: cpf,
        email: email
    }
};

const listar = async () => {
    const [result] = await con.query(
        "SELECT * FROM usuarios;"
    );
    return result;
};

const buscar = async (id) => {
    const [result] = await con.query(
        "SELECT id, nome, email FROM usuarios WHERE id = ?;",
        [id]
    );
    return result;
};

const excluir = async (id) => {
    const [result] = await con.query(
        "DELETE FROM usuarios WHERE id = ?;",
        [id]
    );
    return result.affectedRows;
};



//put
const atualizar = async (id,{nome, cpf, email, senha}) => {
    const [result] = await con.query(
        "UPDATE usuarios SET nome, cpf, email, senha WHERE id= ?",//dados de inserção
        [id, nome, cpf, email, senha]
    );

    return {
        id:result.insertId,
        nome: nome,
        cpf: cpf,
        email: email
    }
};


//patch
const alterar = async () => {};

module.exports = {
    cadastrar,
    listar,
    buscar,
    excluir,
    atualizar,
    alterar
};

