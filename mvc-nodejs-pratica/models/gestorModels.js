// ------------------------------ SEQUELIZE ------------------------------
// Importar bibliotecas
const Sequelize = require('sequelize');
const database = require('../config/dbConfig');

// Criar models
const gestorModels = database.define('medic',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: Sequelize.STRING,
    cpf: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING
})

database.sync();

// Exportar módulo
module.exports = gestorModels;
