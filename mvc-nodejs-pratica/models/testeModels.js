const Sequelize = require('sequelize');
const database = require('../config/dbConfig');

// Criar models
const testeModels = database.define('teste',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: Sequelize.STRING,
    cpf: Sequelize.STRING,
    Relacao: {type:Sequelize.ENUM("APROVADO", "REPROVADO")},
    justificativa: Sequelize.STRING
})

database.sync();

// Exportar módulo
module.exports = testeModels;