// migrations/20250322_rename_id_user_to_id_admin.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('comentario', 'id_user', 'id_admin');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('comentario', 'id_admin', 'id_user');
  },
};