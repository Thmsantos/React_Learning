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

// Rota login
app.post('/auth/login', async (req, res) => {

    const {cpf, password} = req.body;

    // Validações

    // Verificar se o email foi enviado diferente do valor vazio
    if(!cpf){1
        return res.status(422).json({msg: 'O email é obrigatório'});
    };
    
    // Verificar se a senha foi enviada diferente do valor vazio
    if(!password){
        return res.status(422).json({msg: 'A senha é obrigatória'});
    };

    // Verificar se o usuário existe
    const user = await User.findOne({cpf: cpf});

    // Verifica se o usuário existe
    if(!user){
        return res.status(404).json({msg: 'Usuário não encontrado'}); // 404 - Página não encontrada
    };

    // Verificar a senha
    const checarSenha = await bcrypt.compare(password, user.password)
    
    if(!checarSenha){
        return res.status(422).json({ msg: "Senha inválida" });
    }
  
    try {
      const secret = process.env.SECRET;
  
      const token = jwt.sign(
        {
          id: user._id,
        },
        secret
      );
  
      res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });
    } catch (error) {
      res.status(500).json({ msg: error });
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
