const Sequelize = require('sequelize');
const database = require('../config/dbConfig');

// Criar models
const teste_updateModels = database.define('teste_update',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: Sequelize.STRING,
    cpf: Sequelize.STRING,
    Relacao: {type:Sequelize.ENUM("APROVADO", "REPROVADO")},
    justificativa: Sequelize.STRING,
    situacao: {
        type: Sequelize.STRING,
        defaultValue: "nao solicitado",
      }
})

database.sync();

// Exportar módulo
module.exports = teste_updateModels;