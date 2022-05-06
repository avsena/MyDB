import Sequelize, { Model } from 'sequelize';


class Usuario extends Model {
    static init(sequelize) {
        super.init(
            {
                cpf: Sequelize.STRING,
                senha: Sequelize.STRING,
            },
            {
                sequelize
            }
        )

        return this;

    }

}
export default Usuario;