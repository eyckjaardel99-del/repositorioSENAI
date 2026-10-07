const express = require("express");
const router = express.Router();

const Cliente = require("./cliente")
const Pedido = require("./pedido")

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

module.exports = router;