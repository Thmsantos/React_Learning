// Importar biblioteca
const Sequelize = require('sequelize');

// Importar módulos
const database = require('../config/dbConfig');
const teste = require('../models/testeModels');
/* const bcrypt = require('bcrypt') */

class testeControllers{

    static async verDado(req, res){
        let arrayDados = []
        await database.sync()
        let dados = await teste.findAll({
            attributes: [
              'nome', 'cpf','Relacao','justificativa'
            ]
          })
        dados.forEach((dado) => {
            arrayDados.push(dado.dataValues)
        })
        //res.status(200).send('tudo ok')
        res.status(200).json(arrayDados)
    }

     static async verDado_especifico(req, res){ 
        let index = req.params.id

        await database.sync()

        let dado = await  teste.findByPk(1)
        
        res.status(200).json(dado)
    }

    static async addDado(req, res){
        let novoDado = req.body
        await database.sync()
        await teste.create(novoDado)
        res.status(201).send("dado criado")
    }

    static async editarDado(req, res){
        let index = req.params.id
        let dadoAtualizado = req.body
        await database.sync()
        await teste.update(dadoAtualizado, {where: {id : index}})
        res.status(200).send(dadoAtualizado)
    }

    static async excluirDado(req, res){
        let index = req.params.id
        await database.sync()
        teste.destroy({ where: { id: index}})
        res.send('cpf cancelado');
    }
}

module.exports = testeControllers;