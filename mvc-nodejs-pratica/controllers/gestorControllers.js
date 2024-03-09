// Importar módulos
const database = require('../config/dbConfig');
const usuarios = require('../models/gestorModels');
const bcrypt = require('bcrypt')

// Criando class "usersControllers" para fazer o CRUD
class gestorControllers{

    // Listar
    // Get -> Read (com id)
    // static async listarDados(req, res){
    //     let index = req.params.index
    //     await database.sync()
    //     let dado = await usuarios.findByPk(index)
    //     res.status(200).json(dado)
    // };

    // -------------------------- CRIAR USUÁRIO --------------------------
    static async createUser(req, res){
        
        const {nome, cpf, sexo, email, cargo, nascimento, esporte, senha, confirmSenha, numeroTel} = req.body; // Essa const vai facilitar o chamado. Não precisaremos usar o req.body.campo para pegar o valor
        const {cep, rua, bairro, cidade, numero} = req.body; 

         // --------- Validações ---------
 
        // Validar o campo NOME 
        if(!nome || typeof nome == undefined || nome == null){ // !nome - Se o campo nome for vazio || typeof nome == undefined - Se o valor do campo nome for undefined || nome == null - Se o campo nome for nulo
            return res.status(422).json({msg: 'O nome é obrigatório!'}); //  422 - O servidor entende a requisição mas os dados não estão corretos para processar
        };

        // Validar o campo CPF
        if(!cpf || typeof cpf == undefined || cpf == null || cpf.length != 11){ 
            return res.status(422).json({msg: 'O CPF é obrigatório'});
        };

        // Validar o campo SEXO
        if(!sexo || typeof sexo == undefined || sexo == null){ 
            return res.status(422).json({msg: 'O Sexo é obrigatório'});
        };

        if(!senha || typeof senha == undefined || senha == null){ 
            return res.status(422).json({msg: 'A senha é obrigatória'});
        };

        const userExists = await usuarios.findOne({where: {cpf: cpf}}); // Realizar a query para verificar se existe um usuário com esse email cadastrado 

        // Verificar se existe o usuário já está cadastrado no banco
        if(userExists){
            return res.status(422).json({msg: 'CPF já cadastrado'}); // Caso já tenha um usuário com esse cpf cadastrado
        }
        else{
            await database.sync()
    
            // Criar a senha
            const salt = await bcrypt.genSalt(12); // Vai dificultar sua senha
            const passwordHash = await bcrypt.hash(req.body.senha.toString(), salt); // Vai receber a senha do usuário e vai adicionar o "Salt"
        
            req.body.senha = passwordHash; // Passando a senha criptografada

            try{
                await usuarios.create(req.body); // Criar o usuário no banco 
                res.status(200).json({msg: 'Usuário cadastrado com sucesso!!'});
            }
            catch{(err)
                console.log(err)
            }
        }
    };

    // -------------------------- ALTERAR USUÁRIO --------------------------
    static async changeUser(req, res){

        let cpf = req.body.cpf; // Variável que vai armazenar o CPF

        // Criar a senha
        const salt = await bcrypt.genSalt(12); // Vai dificultar sua senha
        const passwordHash = await bcrypt.hash(req.body.senha.toString(), salt); // Vai receber a senha do usuário e vai adicionar o "Salt"
        
        req.body.senha = passwordHash; // vai passar a senah criptografada
        
        let dadoAtualizado = req.body; // Variável que vai receber os dados novos 
       
        await database.sync(); 
        await usuarios.update(dadoAtualizado, {where: {cpf: cpf}}); // Query de alteração
        res.status(200).send("Jogador Atualizado"); // Resposta final
    };



    // -------------------------- DELETAR USUÁRIO --------------------------
    static async deleteUser(req, res){
       
        let id = req.params.id; // Variável que vai receber o id
        
        await database.sync();
        await usuarios.destroy({where: {id: id}}); // Query para apagar 
        res.status(200).send("Usuário Deletado"); // Resposta final
    };

};

// Exportar módulos
module.exports = gestorControllers;
