const Sequelize = require('sequelize');

const database = require('../config/dbConfig');
const models = require('../models/models')

class teste{

    static async visual(req, res){
      await database.sync()
      let dados = await models.findAll({
        attributes: [
          'Sala',
          'Filme',
          'Duracao',
          'Horario',
          'Sinopse'
        ]
      })
      res.status(200).json(dados)
    }

}

module.exports = teste;



