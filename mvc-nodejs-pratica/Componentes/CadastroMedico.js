// Importar bibliotecas 
require('dotenv').config(); // Pegar os dados sensíveis, salvo nos arquivos da máquina
const Express = require('express'); // Serve para fazer a criação da API com NodeJS
const mongoose = require('mongoose'); // Pacote do banco de dados que facilita o uso com o MongoDb
const bcrypt = require('bcrypt'); // Ele vai transformar a senha do usuário em uma hash   complexa para não poder ser hackeada
const jwt = require('jsonwebtoken'); // Vai controlar o token, tanto para criar para um usuário, como para verificar se é válido ou não

const app = Express(); // Const criada para receber o "Express"

// Configuração para conseguir ler o arquivo JSON
app.use(Express.json()); // Começa a aceitar JSON para requisições e respostas

// Importação do model
const User = require('./models/usersModels'); // Importação do módulo "User"

// Registro do usuário médico
app.post('/auth/registro', async (req, res) =>{

    // Const criada para armazenar os valores de cada campo do "req.body."
    // Com isso, não precisa usar "req.body.campo" toda vez que quiser receber o valor dele
    const {nome, cpf, senha} = req.body;

    // ---------------------- Validações ----------------------

    // Validação do campo NOME
    if(!nome || typeof nome == undefined || nome == null){
        return res.status(422).json({msg: 'O nome é obrigatório!'}); //  422 - O servidor entende a requisição mas os dados não estão corretos para processar
    };

    // Validação do campo CPF
    if(!cpf || typeof cpf == undefined || cpf == null){
        return res.status(422).json({msg: 'O email é obrigatório'}); // Vai retornar uma mensagem de erro
    };
    
   // Validação do campo SENHA
    if(!senha || typeof senha == undefined || senha == null){
        return res.status(422).json({msg: 'A senha é obrigatória'}); // Vai retornar uma mensagem de erro
    };

    // Const criada para verificar se existe um usuário com o mesmo cpf cadastrado
    const userExists = await User.findOne({cpf: cpf}); // Realizar a query para verificar se existe um usuário com esse email cadastrado 

    // Verificar se existe esse usuário
    if(userExists){
        return res.status(422).json({msg: 'CPF já cadastrado!!'}); // Vai retornar uma mensagem de erro
    };

    // Consts criadas para criar a senha
    const salt = await bcrypt.genSalt(12); // Vai dificultar sua senha
    const passwordHash = await bcrypt.hash(senha.toString(), salt); // Vai receber a senha do usuário e vai adicionar o "Salt", dando mais segurança a senha do usuário

    // Const Criada para criar o usuário
    const user = new User({
        nome,
        cpf,
        senha: passwordHash
    });

    // Vai tentar salvar o usuário no banco de dados
    try{
        await user.save(); // Esse método vai persistir o usuário no banco de dados
    
        res.status(201).json({msg: 'Usuário criado com sucesso!'}); // 201 - Que o usuário foi criado no banco
    }
    catch(err){ // Caso de um erro ao salvar no banco de dados

        console.log(err) // Mostrar o erro no console

        res.status(500).json({msg: 'Aconteceu um erro no servidor, tente mais tarde!'}) // 500 - Erro do servidor (Nunca é bom mostrar o erro do servidor, fins de didáticas)
    }
});

// Credenciais
const dbUser = process.env.DB_USER; // Const criada para armazenar o nome do usuário do banco de dados
const dbPassword = process.env.DB_PASS; // Const criada para armazenar a senha do banco de dados

// Conexão com o banco de dados
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.gv4aaxs.mongodb.net/?retryWrites=true&w=majority`)
 .then((response) => {
    console.log('Conectado com sucesso') // Caso conecte com o banco de dados
 })
 .catch((err) =>{
    console.log(err) // Caso não consiga se conectar com o banco de dados, ele apresentará o erro
 });

app.listen(3001, () => {
    console.log('Servidor rodando') // Caso o servidor esteja rodando
});
