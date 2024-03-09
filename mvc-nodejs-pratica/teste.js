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

    // Validar o campo EMAIL
    if(!email || typeof email == undefined || email == null){ 
        return res.status(422).json({msg: 'O Email é obrigatório'});
    };

    // Validar o campo CARGO
    if(!cargo || typeof cargo == undefined || cargo == null){
        return res.status(422).json({msg: 'O cargo é obrigatório'});
    };

    // Validar o campo NASCIMENTO
    if(!nascimento || typeof nascimento == undefined || nascimento == null){ 
        return res.status(422).json({msg: 'A data de nascimento é obrigatório'});
    };

    // Validar o campo ESPORTE
    if(!esporte|| typeof esporte== undefined || esporte== null){ 
        return res.status(422).json({msg: 'O Esporte é obrigatório'});
    };

    // Validar o campo SENHA
    if(!senha || typeof senha == undefined || senha == null){ 
        return res.status(422).json({msg: 'A senha é obrigatória'});
    };

    // Validar o campo CONFIRMAR SENHA
    if(!confirmSenha || typeof confirmSenha == undefined || confirmSenha == null){ 
        return res.status(422).json({msg: 'A confirmação da senha é obrigatória'});
    };

    // Validar campos SENHA e CONFIRMAR SENHA
    if(senha != confirmSenha){ // Verifica se os campos são iguais
        return res.status(422).json({msg: 'As senhas precisam ser iguais'});
    };
    
    // Validar o campo CEP
    if(!cep || typeof cep == undefined || cep == null || cep.length != 8){ 
        return res.status(422).json({msg: 'O CEP é obrigatório'});
    };

    // Validar o campo RUA
    if(!rua || typeof rua == undefined || rua == null){ 
        return res.status(422).json({msg: 'O CEP é obrigatório'}); 
    };

    // Validar o campo BAIRRO
    if(!bairro || typeof bairro == undefined || bairro == null){ 
        return res.status(422).json({msg: 'O Bairro é obrigatório'}); 
    };

    // Validar o campo CIDADE
    if(!cidade || typeof cidade == undefined || cidade == null){ 
        return res.status(422).json({msg: 'A Cidade é obrigatório'}); 
    };

    // Validar o campo NUMERO
    if(!numero || typeof numero == undefined || numero == null){ 
        return res.status(422).json({msg: 'O número é obrigatório'}); 
    };

        // Validar o campo NUMERO
    if(!numeroTel || typeof numeroTel == undefined || numeroTel == null){ 
        return res.status(422).json({msg: 'O número é obrigatório'}); 
    };

    // --------- Verificar usuário --------- 

    const userExists = await User.findOne({cpf: cpf}); // Realizar a query para verificar se existe um usuário com esse email cadastrado 

    // Verificar se existe o usuário
    if(userExists){
        return res.status(422).json({msg: 'CPF já cadastrado'}); // Caso já tenha um usuário com esse cpf cadastrado
    };

    // Criar a senha
    const salt = await bcrypt.genSalt(12); // Vai dificultar sua senha
    const passwordHash = await bcrypt.hash(senha.toString(), salt); // Vai receber a senha do usuário e vai adicionar o "Salt"

    // Criar usuário
    const user = new User({
        nome,
        cpf,
        sexo,
        email,
        nascimento,
        esporte,
        cep,
        rua,
        bairro,
        cidade,
        numero,
        senha: passwordHash,
        cargo,
        numeroTel
    });

    // Vai tentar adicionar usuário
    try{
        await user.save(); // Esse método vai persistir o usuário no banco de dados
    
        res.status(201).json({msg: 'Usuário criado com sucesso!'}); // 201 - Que o usuário foi criado no banco
    }
    catch(err){

        console.log(err) // Vai mostrar o erro

        res.status(500).json({msg: 'Aconteceu um erro no servidor, tente mais tarde!'}) // 500 - Erro do servidor (Nunca é bom mostrar o erro do servidor, fins de didáticas)
    }
});


app.post('/alterar/:id', (req, res) =>{

    const {numeroTel} = req.body; // Essa const vai facilitar o chamado. Não precisaremos usar o req.body.campo para pegar o valor

    // --------- Validações ---------
 
    // Validar o campo numero 
    if(!numeroTel || typeof numeroTel == undefined || numeroTel == null || numeroTel.length != 11){ // !numero - Se o campo numero for vazio || typeof numero == undefined - Se o valor do campo numero for undefined || numero == null - Se o campo numero for nulo
        return res.status(422).json({msg: 'Número de telefone inválido'}); //  422 - O servidor entende a requisição mas os dados não estão corretos para processar
    };

    User.findOne(({_id: req.params.id}))
    .then((users) =>{

        users.numeroTel = numeroTel;

        users.save()
        .then(() => {
            return res.status(200).json({msg: 'Usuário salvo com sucesso!!'})
        })
        .catch((err) =>{
            console.log(err)
        })
    })
    .catch((err) =>{
        console.log(err)
    })
});

// Rota login
app.post('/auth/login', async (req, res) => {

    var erros = [] // Array que vai receber os erros

    const {cpf, senha, cargo} = req.body; // Essa const vai facilitar o chamado. Não precisaremos usar o req.body.campo para pegar o valor

    // -------------------- Validações --------------------

    // Validar o campo CPF
    if(!cpf || typeof cpf == undefined || cpf == null || cpf.length != 11){ // !cpf - Se o campo cpf for vazio || typeof cpf == undefined - Se o valor do campo cpf for undefined || cpf == null - Se o campo cpf for nulo || cpf.length != 11 - Verifica se a quantidade de caracteres é diferente de 11
        erros.push({msg: 'informe um CPF'})
        return res.status(422).json({msg: 'O CPF é obrigatório'}); //  422 - O servidor entende a requisição mas os dados não estão corretos para processar
    };

    // Validar o campo SENHA
    if(!senha || typeof senha == undefined || senha == null){ // !senha - Se o campo senha for vazio || typeof senha == undefined - Se o valor do campo senha for undefined || senha == null - Se o campo senha for nulo
        erros.push({msg: 'informe uma senha'})
        return res.status(422).json({msg: 'A senha é obrigatória'}); //  422 - O servidor entende a requisição mas os dados não estão corretos para processar
    };

    if(!cargo || typeof cargo == undefined || cargo == null){ // !cargo - Se o campo cargo for vazio || typeof cargo == undefined - Se o valor do campo cargo for undefined || cargo == null - Se o campo cargo for nulo){
        erros.push({msg: 'informe um cargo'})
    };

    // Verificar se o usuário existe
    const user = await User.findOne({where: {cpf: cpf}}); // Faz a verificação por CPF

    // Verifica se o usuário existe
    if(!user){
        // Se não encontrar esse cpf cadastrado no banco
        erros.push({texto: "Usuário ou senha inválida"})
        //return res.status(404).json({msg: 'Usuário não encontrado'}); // 404 - Página não encontrada
    };

    // Verificar a senha
    const checarSenha = await bcrypt.compare(senha, user.senha) // Vai comparar a senha com a senha criptografada
    
    if(!checarSenha){ // Caso a senha seja inválida
        erros.push({texto: "Usuário ou senha inválida"}) // Retornamos "Usuário ou senha inválida" para dar trabalho ao hacker 
        //return res.status(422).json({ msg: "Senha inválida" });
    }

    if(erros.length > 0){ // Caso tenha algum erro
        console.log("Não foi possível fazer o login")
    }
    else{
        try {
            const secret = process.env.SECRET;
        
            const token = jwt.sign(
              {
                id: user._id,
              },
              secret
            );
        
            res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });

            if(cargo === "1"){
                console.log('Médico')
            };

            if(cargo === "2"){
                console.log('Atleta')
            };

            if(cargo === "3"){
                console.log('Gestor')
            };
      
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


