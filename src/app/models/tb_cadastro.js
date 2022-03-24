//criando model tb_cadastro

const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

class tb_cadastro extends Model {
    static init(sequelize) {
        super.init(
            {
                nome_cadastro: Sequelize.STRING,
                nome_social_cadastro: Sequelize.STRING,
                num_cartao_nacional_saude: Sequelize.STRING,
                cpf: Sequelize.STRING,
                data_nascimento: Sequelize.DATE,
                raca: Sequelize.STRING,
                naturalidade: Sequelize.STRING,
                endereco: Sequelize.STRING,
                bairro: Sequelize.STRING,
                cidade: Sequelize.STRING,
                cep: Sequelize.STRING,

                //queria saber para que serve esse url, como não sabia eu comentei.
                /* url: {
                     type: Sequelize.VIRTUAL,
                     get() {
                         return `${process.env.APP_URL}/uploads/${this.type}/${this.path}`;
                     },
                 }, */
            },
            {
                sequelize,
            }
        );

        // return this;
    }

    /* static associate(models) {
        this.belongsTo(models.Contact, { foreignKey: 'tb_cadastro', as: 'cadastro' });
    }*/
}
export default tb_cadastro;
