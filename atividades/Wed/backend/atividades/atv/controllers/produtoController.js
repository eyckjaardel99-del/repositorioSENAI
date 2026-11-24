const ProdutoModel = require('../models/produtoModels')

const ProdutoControllrer = {
    async listar(req, res){
        try{
            const produtos = await ProdutoModel.listartodos();
            return res.status(200).json(produtos);
        }catch(erro){
            console.error('erro ao listar produtos:', erro );
            return res.status(500).json({Mensagem: 'erro ao consultar produto'})
        }
    },

    async buscarPorId(req, res){
        try{
            const id = Number(req.params.id);
            if(!Number.isInteger(id) <= 0){
                return res.status(400).json ({mensagem: 'id invalido'})
            }

            const produto = await ProdutoModel.buscarporId(id);
            if(!produto){
                return res.status(404).json({mensagem: 'produto nao encontrado'});
            }
            return res.status(200).json(produto)
        }catch(erro){
            console.error('erro ao buscar produto:', erro)
            return res.status(500).json({mensagem:'erro ao consultar proeduto'});
        }
    },

    async criar(req, res){
       try{

            const {nome, descricao, preco} = req.body;
            const precoNumero = Number(preco);

            if(!nome || !string(nome).trim() || preco === underFined || preco ===''
            || !Number.isFinite(precoNumero) || precoNumero < 0){
                return res.status(400).json({mesagem:'infome valores validos'});
            }
            
            const id = await ProdutoModel.criar({
                nome: string(nome).trim(),
                descricao : cescricao ? String(descricao).trim() : null,
                preco: precoNumero
            });

            return res.status(201).json({mensagem: 'produto cadasrtrado com sucesso!', id})

        }catch(erro){
            console.error('erro ao cadastrar produto', erro);
            return res.status(500).json({mensagem:'erro ao cadastrar produto.'})

        }
    },

    //continua na proxima aula

}