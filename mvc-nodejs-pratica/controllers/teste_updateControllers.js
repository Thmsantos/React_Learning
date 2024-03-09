// Importar biblioteca
const Sequelize = require('sequelize');

// Importar módulos
const database = require('../config/dbConfig');
const teste_update = require('../models/teste_updateModels')
/* const bcrypt = require('bcrypt') */

class teste_updateControllers{

    static async editarDado(req, res){
        let index = req.params.id
        let dadoAtualizado = req.body
        await database.sync()
        await teste_update.update(dadoAtualizado, {where: {id : index}})
        res.status(200).send(dadoAtualizado)
    }

    static async addDado(req, res){
        let novoDado = req.body
        await database.sync()
        await teste_update.create(novoDado)
        res.status(201).send("dado criado")
    }

    static async verDado(req, res){
        let arrayDados = []
        await database.sync()
        let dados = await teste_update.findAll({where: {situacao: 'nao solicitado'},
            attributes: [
              'nome', 'cpf', 'id', 'situacao'
            ]
          })
        dados.forEach((dado) => {
            arrayDados.push(dado.dataValues)
        })
        //res.status(200).send('tudo ok')
        res.status(200).json(arrayDados)
    }

}

module.exports = teste_updateControllers;