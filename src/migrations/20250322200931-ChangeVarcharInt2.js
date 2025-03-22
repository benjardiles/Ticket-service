'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('comentario', 'id_admin', {
      type: Sequelize.STRING, // Cambiar a VARCHAR
      allowNull: false, // Asegúrate de mantener esta restricción si aplica
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('comentario', 'id_admin', {
      type: Sequelize.INTEGER, // Revertir a INTEGER si es necesario
      allowNull: false,
    });
  },
};