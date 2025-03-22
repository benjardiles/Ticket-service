import db from '../config/db';

const Comentario = db.sequelize.define(
  'comentario',
  {
    id_comentario: {
      type: db.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comentario: {
      type: db.DataTypes.TEXT,
      allowNull: false,
    },
    idAdmin: { // Cambiado de id_user a idAdmin
      field: 'id_admin', // Asegúrate de que este campo se mapee correctamente en la base de datos
      type: db.DataTypes.STRING, // Cambiado a STRING para VARCHAR
      allowNull: false,
    },
    id_ticket: {
      field: 'id_ticket',
      type: db.DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      field: 'created_at',
      type: db.DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      field: 'updated_at',
      type: db.DataTypes.DATE,
      allowNull: true,
    },
    deletedAt: {
      field: 'deleted_at',
      type: db.DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: 'comentario',
    timestamps: true,
    paranoid: true,
    underscored: true,
  }
);

export default Comentario;