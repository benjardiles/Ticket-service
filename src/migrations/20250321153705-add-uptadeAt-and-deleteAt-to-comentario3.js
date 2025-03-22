'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Agregar las columnas updatedAt y deletedAt a la tabla comentario
    await queryInterface.addColumn('comentario', 'updatedAt', {
      field: 'updated_at',
      type: Sequelize.DataTypes.DATE,
      allowNull: true, // Permitir valores nulos inicialmente
    });

    await queryInterface.addColumn('comentario', 'deletedAt', {
      field: 'deleted_at',
      type: Sequelize.DataTypes.DATE,
      allowNull: true, // Permitir valores nulos inicialmente
    });
  },

  async down(queryInterface, Sequelize) {
    // Eliminar las columnas en caso de revertir la migración
    await queryInterface.removeColumn('comentario', 'updatedAt');
    await queryInterface.removeColumn('comentario', 'deletedAt');
  },
};