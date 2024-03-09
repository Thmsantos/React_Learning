const Express = require('express');
const testeControllers = require('../controllers/testeControllers');
const router = Express.Router();

// Definir o home page route
router
  .get("/get", testeControllers.verDado) 
  .put("/:id", testeControllers.editarDado)
  .post("/addDado", testeControllers.addDado)
  .get("/:id", testeControllers.verDado_especifico)
  .delete("/:id", testeControllers.excluirDado)

// Exportar módulos
module.exports = router;