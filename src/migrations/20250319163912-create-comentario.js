'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('comentario', {
      id_comentario: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comentario: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      id_user: {
        type: Sequelize.DataTypes.STRING,
      },
      id_ticket: {
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('comentario');
  }
};
