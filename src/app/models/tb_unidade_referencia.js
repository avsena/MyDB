const Sequelize = require('sequelize');


class tb_unidade_referencia extends Model {
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
export default tb_unidade_referencia;