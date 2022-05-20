import Sequelize, { Model } from 'sequelize';

class Cadastro extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                nome_social: Sequelize.STRING,
                num_cartao_nacional_saude: Sequelize.STRING,
                data_nascimento: Sequelize.DATE,
                raca: Sequelize.STRING,
                naturalidade: Sequelize.STRING,
                endereco: Sequelize.STRING,
                bairro: Sequelize.STRING,
                cidade: Sequelize.STRING,
                estado: Sequelize.STRING,
                cep: Sequelize.STRING,

            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'id_usuario', as: 'usuario' });
        this.belongsTo(models.UnidadeReferencia, { foreignKey: 'id_referencia', as: 'unidade_referencia' });
    }
}
export default Cadastro;