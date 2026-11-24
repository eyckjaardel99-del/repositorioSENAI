const db = require('../config/database');

const ProdutoModel = {
    async listartodos(){
        const [linhas] = await db.query(
            'SELECT id, nome, descricao, preco, criado_em FROM produtos ORDER BY id DESC',
        )
        return linhas
    },

    async buscarPorID(){
        const [linhas] = await db.query(
            'SELECT id, nome, descricao, preco, criado_em FROM produtos WHERE id =?',
            [Id]
        )
        return linhas[0];
    },

    async criar(produto){
        const {nome, descricao, preco} = produtoModel;
        const [resutado] = await db.query(
            'INSERT INTO produtos(nome, descricao, preco) VALUES(?,?,?)',
            [nome, descricao || null, preco]
        )
        return resultado.insertId;

    },

    async atualizar(id, produto){
        const {nome, descricao, preco} = produto
        const [resultado] = await db.query(
            'UPDATE produtos SET nome = ?, descricao =?, preco =?, id=?',
            [nome,descricao || null, preco, id]
        )
        return resultado.affectedRows;
    },

    async escluir(id){
        const[resultado] = await db.query(
            'DELETE FROM produtos WHERE',
            [id]
        )
        return resultado.affectedRows;
    }
}
module.exports = ProdutoModel;