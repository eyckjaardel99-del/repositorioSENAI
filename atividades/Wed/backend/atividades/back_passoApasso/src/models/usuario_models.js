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
    };
};

const listar = (req, res) => {};

const buscar = (req, res) => {};

const excluir = (req, res) => {};

//put
const atualizar = (req, res) => {};

//patch
const alterar = (req, res) => {};

module.exports = {
    cadastrar,
    listar,
    buscar,
    excluir,
    atualizar,
    alterar
};