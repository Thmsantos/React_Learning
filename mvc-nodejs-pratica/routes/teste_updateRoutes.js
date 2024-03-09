const Express = require('express');

const teste_updateControllers = require('../controllers/teste_updateControllers');

const router = Express.Router();

// Definir o home page route
router
  .put("/:id", teste_updateControllers.editarDado)
  .post("/addDado", teste_updateControllers.addDado)
  .get("/get", teste_updateControllers.verDado) 
  
// Exportar módulos
module.exports = router;