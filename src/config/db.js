// importando sequelize , autentica no mariadb
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mydb', 'root', '123456', {
    host: 'localhost',
    dialect: 'mariadb',
    port: 3306,

    define: {

        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
});
//conectando com o banco
async function connect() {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');

    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    });

}
module.exports = { sequelize, connect }