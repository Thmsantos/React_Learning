// Importar bibliotecas 
require('dotenv').config(); // Pegar os dados sensíveis, salvo nos arquivos da máquina
const Express = require('express'); // Serve para fazer a criação da API com NodeJS
const mongoose = require('mongoose'); // Pacote do banco de dados que facilita o uso com o MongoDb
const bcrypt = require('bcrypt'); // Ele vai transformar a senha do usuário em uma hash   complexa para não poder ser hackeada
const jwt = require('jsonwebtoken'); // Vai controlar o token, tanto para criar para um usuário, como para verificar se é válido ou não

const app = Express(); // Const criada para receber o "Express"

// Configuração para conseguir ler o arquivo JSON
app.use(Express.json()); // Começa a aceitar JSON para requisições e respostas

// Models
const User = require('./models/mongoose'); // Importação do módulo "User"

// Rota pública
app.get('/', (req, res) => {
    res.status(200).json({msg: "Bem-vindo a nossa API"}) // Envia a resposta ao entrar na rota "/"
});

// Rota privada
app.get('/user/:id', verificarToken ,async (req, res) =>{
    const id = req.params.id;

    // Verificar se o usuário existe
    const user = await User.findById(id, '-password'); // -password - Não vai pegar a senha do usuário.
    
    if(!user){
        res.status(404).json({msg: 'usuário não encontrado'});
    };

    res.status(200).json({ user });
});

function verificarToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
        return res.status(401).json({msg: 'Acesso Negado'});
    };

    try{
        const secret = process.env.SECRET;

        jwt.verify(token, secret);

        next()
    }catch(err){
        console.log(err);
        res.status(400).json({msg: 'Token inválido!'});
    }
};

// Registrando Usuário
app.post('/auth/registro', async (req, res) =>{
    // const {name, email, password, confirmpassword} = req.body;
    const {nome, cpf, senha, confirmSenha} = req.body;

    // --------- Validações ---------

    if(!nome || typeof nome == undefined || nome == null){
        return res.status(422).json({msg: 'O nome é obrigatório!'}); //  422 - O servidor entende a requisição mas os dados não estão corretos para processar
    };

    // Verificar se o email foi enviado diferente do valor vazio
    if(!cpf || typeof cpf == undefined || cpf == null || cpf.length != 11){
        return res.status(422).json({msg: 'O CPF é obrigatório'});
    };

    // Verificar se a senha foi enviada diferente do valor vazio
    if(!senha || typeof senha == undefined || senha == null){
        return res.status(422).json({msg: 'A senha é obrigatória'});
    };

    // Verificar se a senha confirmada é diferente do valor vazio
    if(!confirmSenha || typeof confirmSenha == undefined || confirmSenha == null){
        return res.status(422).json({msg: 'A confirmação da senha é obrigatória'});
    };

    // Verifica se o campo "confirmar senha" é igual ao campo "senha"
    if(senha != confirmSenha){
        return res.status(422).json({msg: 'As senhas precisam ser iguais'});
    };

    // Verificar usuário
    const userExists = await User.findOne({cpf: cpf}); // Realizar a query para verificar se existe um usuário com esse email cadastrado 

    // Verificar se existe esse usuário
    if(userExists){
        return res.status(422).json({msg: 'CPF já cadastrado'});
    };

    // Criar a senha
    const salt = await bcrypt.genSalt(12); // Vai dificultar sua senha
    const passwordHash = await bcrypt.hash(senha.toString(), salt); // Vai receber a senha do usuário e vai adicionar o "Salt"

    // Criar usuário
    const user = new User({
        nome,
        cpf,
        senha: passwordHash
    });

    // Validação para adicionar usuário

    try{
        await user.save(); // Esse método vai persistir o usuário no banco de dados
    
        res.status(201).json({msg: 'Usuário criado com sucesso!'}); // 201 - Que o usuário foi criado no banco
    }
    catch(err){

        console.log(err)

        res.status(500).json({msg: 'Aconteceu um erro no servidor, tente mais tarde!'}) // 500 - Erro do servidor (Nunca é bom mostrar o erro do servidor, fins de didáticas)
    }
});

// Rota login
app.post('/auth/login', async (req, res) => {

    var erros = [] // Array que vai receber os erros

    const {email, password} = req.body;

    // Validações

    // Verificar se o email foi enviado diferente do valor vazio
    if(!email){
        return res.status(422).json({msg: 'O email é obrigatório'});
    };
    
    // Verificar se a senha foi enviada diferente do valor vazio
    if(!password){
        return res.status(422).json({msg: 'A senha é obrigatória'});
    };

    // Verificar se o usuário existe
    const user = await User.findOne({email: email});

    // Verifica se o usuário existe
    if(!user){
        // Se não encontrar esse cpf cadastrado no banco
        erros.push({texto: "Usuário ou senha inválida"})
        //return res.status(404).json({msg: 'Usuário não encontrado'}); // 404 - Página não encontrada
    };

    // Verificar a senha
    const checarSenha = await bcrypt.compare(password, user.password)
    
    if(!checarSenha){
        erros.push({texto: "Usuário ou senha inválida"})
        //return res.status(422).json({ msg: "Senha inválida" });
    }

    if(erros.length > 0){
        console.log("Não foi possível fazer o login")
    }else{
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


