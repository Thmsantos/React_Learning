// Importacão das bibliotecas 
const express = require('express')

// Importação dos módulos
const UserController = require('../controllers/medicoControllers')

const router = express.Router();

router
  .get("/")
  .get("/cadastro")
  .get("/alterar")
  .post("/", UserController.checkCredentials)
  .post("/cadastro", UserController.createUser)
  .put("/alterar", UserController.alterarDado)
  .delete("/deletar/:id", UserController.deletarDado)

// Exportação do módulo
module.exports = router  