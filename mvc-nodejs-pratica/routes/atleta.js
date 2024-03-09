// Importar bibliotecas 
require('dotenv').config(); // Pegar os dados sensíveis, salvo nos arquivos da máquina
const Express = require('express'); // Serve para fazer a criação da API com NodeJS
const mongoose = require('mongoose'); // Pacote do banco de dados que facilita o uso com o MongoDb
const bcrypt = require('bcrypt'); // Ele vai transformar a senha do usuário em uma hash   complexa para não poder ser hackeada
const app = Express(); // Const criada para receber o "Express"

// Models
const User = require('./models/mongoose'); // Importação do módulo "User"

// Alterar o número de telefone
app.post('/alterar/:id', (req, res) =>{

    const {numeroTel} = req.body; // Essa const vai facilitar o chamado. Não precisaremos usar o req.body.campo para pegar o valor

    // --------- Validações ---------
 
    // Validar o campo numero 
    if(!numero || typeof numero == undefined || numero == null || numero.length != 11){ // !numero - Se o campo numero for vazio || typeof numero == undefined - Se o valor do campo numero for undefined || numero == null - Se o campo numero for nulo
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