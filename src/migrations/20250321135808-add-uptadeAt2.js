'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Agregar columna updatedAt
    await queryInterface.addColumn('comentario', 'updatedAt', {
      field: 'updated_at',
      type: Sequelize.DataTypes.DATE,
      allowNull: true, // Puedes cambiar esto si no quieres permitir valores nulos
    });

    // Agregar columna deletedAt
    await queryInterface.addColumn('comentario', 'deletedAt', {
      field: 'deleted_at',
      type: Sequelize.DataTypes.DATE,
      allowNull: true, // Puedes cambiar esto si no quieres permitir valores nulos
    });
  },

  async down(queryInterface, Sequelize) {
    // Eliminar columna updatedAt
    await queryInterface.removeColumn('comentario', 'updatedAt');

    // Eliminar columna deletedAt
    await queryInterface.removeColumn('comentario', 'deletedAt');
  },
};