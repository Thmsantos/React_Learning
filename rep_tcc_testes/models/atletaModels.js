const Sequelize = require('sequelize');
const database = require('../config/dbConfig');
const gestorModels = require('./gestorModels')


const atletaModels = database.define('atleta', {
    idatleta:{
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome : Sequelize.STRING(100),
    cpf : Sequelize.CHAR(11),
    email : Sequelize.STRING(100),
    senha : Sequelize.STRING(30),
    d_nasc : Sequelize.DATE,
    sexo : Sequelize.ENUM('F', 'M', 'PREFIRO NÃO INFORMAR'),
    categoria : Sequelize.STRING(20),
    cargo : Sequelize.STRING(20),
    modalidade : Sequelize.STRING(20),
    solicitacao : Sequelize.ENUM('SOLICITADO', 'NÃO SOLICITADO', 'AVALIADO'),
    situacao : Sequelize.ENUM('APROVADO', 'PENDENTE', 'REPROVADO'),
    id_gestor_atl : {
        type : Sequelize.INTEGER,
        references : {
            model : gestorModels,
            key : 'idgestor'
        }
    }
})

database.sync()

module.exports = atletaModels