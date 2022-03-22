//qual a função desse cadastro.js?/

import Sequelize, { Model } from 'sequelize';

class Cadastro extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                path: Sequelize.STRING,
                type: Sequelize.STRING,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `${process.env.APP_URL}/uploads/${this.type}/${this.path}`;
                    },
                },
            },
            { sequelize }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Contact, { foreignKey: 'tb_cadastro', as: 'cadastro' });
    }
}
export default Cadastro;
