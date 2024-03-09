const Express = require('express');

const controller = require('../controllers/controller');

const router = Express.Router();

router
  .get("/get", controller.visual)
 
module.exports = router;
