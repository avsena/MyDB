const Sequelize = require('sequelize');


class Unidade_referencia extends Model {
    static init(sequelize) {
        super.init(
            {
                desc_unidade_referencia: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

    }

}
export default Unidade_referencia;