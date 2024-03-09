// ------------------------------ SEQUELIZE ------------------------------
// Importar biblioteca
const Sequelize = require('sequelize');

// Conectar com banco de dados
const connection = new Sequelize('ProjSaude','root','',{
    dialect: 'mysql',
    host:'localhost',
    port: 3306,
})

// Exportar módulo
module.exports = connection;