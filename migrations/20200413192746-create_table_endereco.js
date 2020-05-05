"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("endereco", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      endereco: Sequelize.STRING(199),
      numero: Sequelize.INTEGER,
      complemento: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      cep: Sequelize.INTEGER(8),
      uf: Sequelize.STRING(2),
      fk_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "usuario",
          },
          key: "id_usuario",
        },
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("endereco");
  },
};
