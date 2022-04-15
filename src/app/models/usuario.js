const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

class Usuario extends Model {
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
export default Usuario;