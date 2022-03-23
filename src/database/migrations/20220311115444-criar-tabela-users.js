'use strict';

module.exports = {
  async up (queryInterface, Sequelize) => {
    /** //CRIANDO PARA CORREÇÃO:
alfredo: return queryInterface.createTables('cadastro', {
          id: Sequelize.INTERGER 
          type: Sequelize.INTERGER,
          primeiryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nome_cadastro: {
          type: Sequelize.STRING,
          allowNull:false,
        },
        nome_social_cadastro {
          type: Seuqelize.STRING,
          allowNull:false
          autoIncrement:false,
        },
        num_cartao_nacional_saude {
          type: Sequelize.STRING,
          allowNull:false,
          autoIncrement:false,
        },
        cpf {
          type: Sequelize.INTERGER,
          allowNull:false,
          autoIncrement:false,
        },
        data_nascimento {
          type: Sequelize.DATE,
          allowNull:false,
          autoIncrement:false,
        },
        raca {
          type: Sequelize.VARCHAR,
          allowNull:false,
          autoIncrement:false,
        },
        naturalidade {
          type: Sequelize.STRING,
          allowNull:false,
          autoIncrement:false,
        },
        endereco {
          type: Sequelize.STRING,
          allowNull:false,
          autoIncrement:false,
        },
        bairro {
          type: Sequelize.STRING,
          allowNull:false,
          autoIncrement:false,
        },
        cidade {
          type: Sequelize.STRING,
          allowNull:false,
          autoIncrement:false,
        },
        estado {
          type: Sequelize.STRING,
          allowNull:false,
          autoIncrement:false,
        },
        cep {
          type: Sequelize.INTERGER,
          allowNull:false,
          autoIncrement:false,
        },
        tb_usuario_id_usuario {
          type: Sequelize.INTERGER,
          secundarykey:true, //termo correto?
          allowNull:false
          AutoIncrement:false
        },
        tb_unidade_referencia_id_unidade_referencia {
          type: Sequelize.INTERGER,
          secundaryKey:true //termo correto?
          allowNull:false,
          autoIncrement:false,
        },
  },

      *Add altering commands here.
      Example:
      await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
