const Sequelize = require('sequelize');
const database = require('../config/dbConfig');
const gestorModels = require('./gestorModels')

const medicoModels = database.define('medico', {
    idmedico:{
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome : Sequelize.STRING(50),
    cpf : Sequelize.CHAR(11),
    crm : Sequelize.CHAR(9),
    sexo : Sequelize.ENUM("M", "F", "PREFIRO NÃO INFORMAR"),
    email : Sequelize.STRING(50),
    senha : Sequelize.STRING(30),
    especialidade : Sequelize.STRING(35),
    id_gestor_med : {
        type : Sequelize.INTEGER,
        references : {
            model : gestorModels,
            key : 'idgestor'
        }
    }
}) 

database.sync()

module.exports = medicoModels;