const { QueryTypes } = require('sequelize');
const { sequelize } = require("./db.js");
module.exports = {
    async insertUser(user) {
        const sql = `INSERT INTO tb_usuarios(login,senha) VALUES ('${user.login}','${user.senha}');`;
        return await sequelize.query(sql, {
            type: QueryTypes.INSERT
        });
    }
}
