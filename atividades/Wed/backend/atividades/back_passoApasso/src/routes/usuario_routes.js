const express = require("express");

const routes = express.Router();

/* const usuarioController = require("../controllers/usuario_controller");

routes.post("/cadastrar", usuarioController.cadastrar);*/

const {cadastrar, listar, buscar, excluir, atualizar} = require("../controllers/usuario_controller.js")

routes.post("/cadastrar", cadastrar);
routes.get("/listar", listar);
routes.get("/buscar/:id", buscar);
routes.delete("/excluir/:id",excluir)
routes.put("/atualizar/:id", atualizar)



module.exports = routes;