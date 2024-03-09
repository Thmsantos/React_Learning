const Sequelize = require('sequelize');
const database = require('../config/dbConfig');

const programacao_Models = database.define('Programacao',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Sala: Sequelize.STRING,
    Filme: Sequelize.STRING,
    Duracao: Sequelize.STRING,
    Horario: Sequelize.STRING,
    Faturamento: Sequelize.STRING,
    Sinopse: Sequelize.STRING
})

database.sync();


module.exports = programacao_Models;
