const express = require('express')

const router = express.Router()

const {listar,buscarPorId, criar} = require('../controllers/produtoController')

routes.get('/listar', listar);
routes.get('/buscarPorId:id', buscarPorId)
routes.post('/criar', criar)

module.exports = routes

//const Controller = require('../controllers/produtoController')