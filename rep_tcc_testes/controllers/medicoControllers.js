// Importar biblioteca
const Sequelize = require('sequelize');

// Importar módulos
const database = require('../config/dbConfig');
/* const medicoModels = require('../models/medicoModels')
 */const atletaModels = require('../models/atletaModels')

class medicoControllers{

    static async ver_naoAvaliado(req, res){
        let arrayDados = []
        await database.sync()
        let dados = await atletaModels.findAll({

          where: {solicitacao: ['SOLICITADO', 'NÃO SOLICITADO']},

          attributes: [
            'nome',
            'cpf',
            'd_nasc',
            'sexo',
            'categoria',
            'cargo',
            'modalidade',
            'solicitacao',
            'situacao'
          ]
          
          })
        dados.forEach((dado) => {
            arrayDados.push(dado.dataValues)
        })
        res.status(200).json(arrayDados)
    }

    static async ver_Avaliado(req, res){
      let arrayDados = []
      await database.sync()
      let dados = await atletaModels.findAll({

        where: {solicitacao: 'AVALIADO'},

          attributes: [
            'nome',
            'cpf',
            'd_nasc',
            'sexo',
            'categoria',
            'cargo',
            'modalidade',
            'solicitacao',
            'situacao'
          ]
        })
      dados.forEach((dado) => {
          arrayDados.push(dado.dataValues)
      })
      res.status(200).json(arrayDados)
  }

    
    static async filtrarNome(req, res){
      let nome = req.body.nome
      await database.sync()
      let dados = await atletaModels.findAll({
        where: {nome: nome},

        attributes: [
          'nome',
          'cpf',
          'd_nasc',
          'sexo',
          'categoria',
          'cargo',
          'modalidade',
          'solicitacao',
          'situacao'
        ]
        
      })
      res.status(200).json(dados)
    }

    static async filtrarCPF(req, res){
      let cpf = req.body.cpf
      await database.sync()
      let dados = await atletaModels.findAll({
        where: {cpf: cpf},

        attributes: [
          'nome',
          'cpf',
          'd_nasc',
          'sexo',
          'categoria',
          'cargo',
          'modalidade',
          'solicitacao',
          'situacao'
        ]

      })
      res.status(200).json(dados)
    }

}

module.exports = medicoControllers;