import Sequelize from 'sequelize';
import Usuario from '../app/models/usuario';
import dbConfig from '../config/db';

const models = [Usuario]

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