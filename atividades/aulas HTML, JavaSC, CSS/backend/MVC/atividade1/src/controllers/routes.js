const express = require("express");
const router = express.Router();

const Cliente = require("./cliente")
const Pedido = require("./pedido")
const items = require("./item")
const produto = require("./produto")

const inicialCliente = (req, res)=>{
    res.json("tudo ok")
}


router.get('/', inicialCliente)

router.post(`/clientes`, Cliente.criar)
router.get(`/clientes`, Cliente.listar)
router.put(`/clientes/:id`, Cliente.alterar)
router.delete(`/clientes/:id`, Cliente.excluir)
router.patch(`/clientes/:id`, Cliente.alterarParte)


router.post(`/pedido`, Pedido.criar)
router.get(`/pedido`, Pedido.listar)
router.put(`/pedido/:id`, Pedido.alterar)
router.delete(`/pedido/:id`, Pedido.excluir)
router.patch(`/pedido/:id`, Pedido.alterarParte)

router.post(`/produto`, produto.criar)
router.get(`/produto`, produto.listar)
router.put(`/produto/:id`, produto.alterar)
router.delete(`/produto/:id`, produto.excluir)
router.patch(`/produto/:id`, produto.alterarParte)

router.post(`/items`, items.criar)
router.get(`/items`, items.listar)
router.put(`/items/:id`, items.alterar)
router.delete(`/items/:id`, items.excluir)
router.patch(`/items/:id`, items.alterarParte)

module.exports = router;