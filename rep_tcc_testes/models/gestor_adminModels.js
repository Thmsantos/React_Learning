const Sequelize = require('sequelize');
const database = require('../config/dbConfig');

//Criar models
const gestor_adminModels = database.define('gestor_admin',{
    idadmin:{
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome : Sequelize.STRING(50),
    cpf : Sequelize.CHAR(11),
    senha: Sequelize.STRING(30),
    email : Sequelize.STRING(50)
})

database.sync()

module.exports = gestor_adminModels