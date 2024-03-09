// Importar bibliotecas 
require('dotenv').config(); // Pegar os dados sensíveis, salvo nos arquivos da máquina
const Express = require('express'); // Serve para fazer a criação da API com NodeJS
const mongoose = require('mongoose'); // Pacote do banco de dados que facilita o uso com o MongoDb
const bcrypt = require('bcrypt'); // Ele vai transformar a senha do usuário em uma hash   complexa para não poder ser hackeada
const app = Express(); // Const criada para receber o "Express"


// Models
const User = require('./models/mongoose'); // Importação do módulo "User"


// Registrando Usuário
app.post('/auth/registro', async (req, res) =>{

    const {nome, cpf, sexo, email, cargo, nascimento, esporte, senha, confirmSenha} = req.body; // Essa const vai facilitar o chamado. Não precisaremos usar o req.body.campo para pegar o valor
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
        cargo
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



// Alterar o cadastro
app.post('/alterar/:id', (req, res) =>{
    const {nome, cpf, sexo, email, cargo, nascimento, esporte, senha} = req.body; // Essa const vai facilitar o chamado. Não precisaremos usar o req.body.campo para pegar o valor
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

    User.findOne(({_id: req.params.id}))
    .then((users) =>{
        users.nome = nome;
        users.cpf = cpf;
        users.sexo = sexo;
        users.email = email;
        users.cargo = cargo;
        users.nascimento = nascimento;
        users.esporte = esporte;
        users.senha = senha;
        users.cep = cep;
        users.rua = rua;
        users.bairro = bairro;
        users.cidade = cidade;
        users.numero = numero;

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