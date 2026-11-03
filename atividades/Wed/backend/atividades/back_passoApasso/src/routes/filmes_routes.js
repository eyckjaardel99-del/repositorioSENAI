const express = require("express");

const routes = express.Router();

const {cadastrar, listar, buscar, excluir, atualizar} = require("../controllers/filmes_controllers")

routes.post("/cadastrar", cadastrar);
routes.get("/listar", listar);
routes.get("/buscar/:id", buscar);
routes.delete("/excluir/:id",excluir)
routes.put("/atualizar/:id", atualizar)



module.exports = routes;