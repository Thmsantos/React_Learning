const Sequelize = require('sequelize');
const database = require('../config/dbConfig');

const medicoModels = database.define('medico',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true  
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});

database.sync();

module.exports = medicoModels;