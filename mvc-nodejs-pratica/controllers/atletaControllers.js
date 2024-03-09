// Importar módulos
const database = require('../config/dbConfig');
const usuarios = require('../models/gestorModels');
const bcrypt = require('bcrypt')

// Criando class "usersControllers" para fazer o CRUD
class atletaControllers{

    // -------------------------- ALTERAR USUÁRIO --------------------------
    static async changeUser(req, res){

        let cpf = req.body.cpf; // Variável que vai armazenar o CPF

        // Criar a senha
        const salt = await bcrypt.genSalt(12); // Vai dificultar sua senha
        const passwordHash = await bcrypt.hash(req.body.senha.toString(), salt); // Vai receber a senha do usuário e vai adicionar o "Salt"
        
        req.body.senha = passwordHash; // vai passar a senah criptografada
        
        let dadoAtualizado = req.body.telefone; // Variável que vai receber os dados novos 
       
        await database.sync(); 
        await usuarios.update(dadoAtualizado, {where: {cpf: cpf}}); // Query de alteração
        res.status(200).send("Dados Atualizado!!"); // Resposta final
    };
};

// Exportar módulos
module.exports = atletaControllers;
