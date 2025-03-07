'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('admin', {
      id_admin: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DataTypes.DATE,
      },
      deletedAt: {
        field: 'deleted_at',
        type: Sequelize.DataTypes.DATE,
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('admin'); 
  }
};
