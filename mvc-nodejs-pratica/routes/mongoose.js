// ------------------------------ MONGOOSE ------------------------------

// Importar os módulos
const express = require('express'); // Const que vai pegar o express
const LivrosController = require('../controllers/moedaController'); // Const que vai pegar o controller
const router = express.Router(); // Const que vai permitir criar as rotas 

router.get("/", LivrosController.listarLivros);
router.get("/users/:id", UsuariosController.listarLivroPorId)
router.post("/users", UsuariosController.cadastrarLivro)
router.put("/users/:id", UsuariosController.atualizarLivro)
router.delete("/users/:id", UsuariosController.excluirLivro)

module.exports = router  