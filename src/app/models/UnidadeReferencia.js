import Sequelize, { Model } from 'sequelize';


class UnidadeReferencia extends Model {
    static init(sequelize) {
        super.init(
            {
                descricao: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        return this;

    }

    static associate(models) {
        
        /*this.hasMany(models.Cadastro, { foreignKey: 'id_usuario', as: 'usuario' });*/
    
}

}
export default UnidadeReferencia;