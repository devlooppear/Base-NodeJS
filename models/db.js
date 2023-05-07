const Sequelize = require('sequelize')

//Conexão com Banco de Dados MySQL
const sequelize = new Sequelize('postapp', 'root', '<sua senha aqui>', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}