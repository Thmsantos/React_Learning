// Importar biblioteca
const Sequelize = require('sequelize');

// Importar módulos
const database = require('../config/dbConfig');
const medicos = require('../models/medicoModels');
/* const bcrypt = require('bcrypt') */

class medicoControllers{

    static async verDado(req, res){
        await database.sync()
        let dados = await medicos.findAll({ raw: true })
        res.status(200).json(dados)
    }

     static async verDado_especifico(req, res){
        let index = req.params.id

        await database.sync()

        let dado = await  medicos.findByPk(1)
        
        res.status(200).json(dado)
    }

    static async addDado(req, res){
        let novoDado = req.body
        await database.sync()
        await medicos.create(novoDado)
        res.status(201).send("dado criado")
    }

    static async editarDado(req, res){
        let index = req.params.id
        let dadoAtualizado = req.body
        await database.sync()
        await medicos.update(dadoAtualizado, {where: {id : index}})
        res.status(200).send(dadoAtualizado)
    }

    static async excluirDado(req, res){
        let index = req.params.id
        await database.sync()
        medicos.destroy({ where: { id: index}})
        res.send('cpf cancelado');
    }
}

module.exports = medicoControllers;
