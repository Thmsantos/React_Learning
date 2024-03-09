const Express = require('express');
const medicoControllers = require('../controllers/medicoControllers');
const router = Express.Router();


// Definir o home page route
router
  .get("/get", medicoControllers.verDado) 
  .put("/:id", medicoControllers.editarDado)
  .post("/addDado", medicoControllers.addDado)
  .get("/:id", medicoControllers.verDado_especifico)
  .delete("/:id", medicoControllers.excluirDado)

// Exportar módulos
module.exports = router;