const Express = require('express');

const medicoControllers = require('../controllers/medicoControllers');

const router = Express.Router();

// Definir o home page route
router
  /* .get("/get", medicoControllers.verDado_solicitado_ou_nao) */
  .get("/nao_avaliados", medicoControllers.ver_naoAvaliado)
  .get("/avaliados", medicoControllers.ver_Avaliado)
  .post("/nome", medicoControllers.filtrarNome)
  .post("/cpf", medicoControllers.filtrarCPF)

// Exportar módulos
module.exports = router;