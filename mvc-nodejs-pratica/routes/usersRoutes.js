// Iportar bibliotecas
const Express = require('express');
const router = Express.Router();

// Importar módulos
const usersControllers = require('../controllers/usersControllers');

// Definir o home page route
router
  .get("/", UserController.showLogin) // Na rota "/" ela vai usar o "showLogin" que foi criado no UserController
  .get("/cadastro", UserController.insertUser)
  .get("/alterar", UserController.alterarCad)
  .post("/", UserController.checkCredentials)
  .post("/cadastro", UserController.createCredentials)
  .post("/alterar", UserController.alterarDado)

// Exportar módulos
module.exports = router;