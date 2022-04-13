'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tb_cadastro',

      {
        id: {
          type: Sequelize.INTERGER,
          allowNull: false,
          autoIncrement: true,
          primeiryKey: true,
        },

        nome_cadastro: {
          type: Sequelize.STRING,
          allowNull: false
        },

        nome_cadastro: {
          type: Sequelize.STRING,
          allowNull: false
        },

        nome_social_cadastro: {
          type: Sequelize.STRING,
          allowNull: false
        },

        num_cartao_nacional_saude: {
          type: Sequelize.STRING,
          allowNull: false
        },

       cpf: {
          type: Sequelize.STRING,
          allowNull: false
        },
        //aqui realmente é tipo DATE? 
        data_nascimento: {
          type: Sequelize.DATE,
          allowNull: false
        },

        raca: {
          type: Sequelize.STRING,
          allowNull: false
        },

        naturalidade: {
          type: Sequelize.STRING,
          allowNull: false
        },

        endereco: {
          type: Sequelize.STRING,
          allowNull: false
        },

        bairro: {
          type: Sequelize.STRING,
          allowNull: false
        },

        cidade: {
          type: Sequelize.STRING,
          allowNull: false
        },

        estado: {
          type: Sequelize.STRING,
          allowNull: false
        },

        cep: {
          type: Sequelize.STRING,
          allowNull: false
        },
        //falta algo aqui? por ser id de outra tabela
        tb_usuarios_id_usuario: {
          type: Sequelize.INTERGER,
          allowNull: false
        },
        //falta algo aqui? por ser id de outra tabela
        tb_unidade_referencia_id_referencia: {
          type: Sequelize.INTERGER,
          allowNull: false
        },

        created_at: {   
          type: Sequelize.DATE,
          allowNull: false
        },

        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
      })
  },

   down:(queryInterface, Sequelize) => {
     
   }
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  
};
