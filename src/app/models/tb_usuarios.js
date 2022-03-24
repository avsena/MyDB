const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

class tb_usuarios extends Model {
    static init(sequelize) {
        super.init(
            {
                login: Sequelize.STRING,
                senha: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

    }

}
export default tb_usuarios;