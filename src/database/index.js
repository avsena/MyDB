import Sequelize from 'sequelize';
import Usuario from '../app/models/Usuario';
import Cadastro from '../app/models/Cadastro';
import dbConfig from '../config/db';
import UnidadeReferencia from '../app/models/UnidadeReferencia';

const models = [Usuario, Cadastro, UnidadeReferencia]

class Database {
    constructor() {

        this.init();
    }

    init() {
        this.connection = new Sequelize(dbConfig);
        console.log('Conexão realizada com sucesso!');
        models
            .map((model) => model.init(this.connection)).map((model) => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();