'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('comentario', 'id_admin', { // Cambiamos 'idAdmin' por 'id_admin'
      type: Sequelize.STRING, // Cambia a STRING si la otra tabla utiliza VARCHAR
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('comentario', 'id_admin', {
      type: Sequelize.INTEGER, // Revertimos a INT si es necesario
      allowNull: false,
    });
  },
};