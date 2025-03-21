import db from '../config/db';
import { up } from '../migrations/20250306171324-create-admin';

const Comentario = db.sequelize.define('comentario', {
    id_comentario: {
        type: db.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    comentario: {
        type: db.DataTypes.TEXT,
        allowNull: false,
    },
    id_user: {
        type: db.DataTypes.STRING,
    },
    id_ticket: {
        type: db.DataTypes.STRING,
    },
    createdAt: {
        field: 'created_at',
        type: db.DataTypes.DATE,
    },
    updatedAt: {
        field: 'updated_at',
        type: db.DataTypes.DATE,
    },
    deletedAt: {
        field: 'deleted_at',
        type: db.DataTypes.DATE,
    },
}, {
    tableName: 'comentario',  // ⬅️ Esto evita que Sequelize intente usar updatedAt y createdAt
    underscored: true,  // ⬅️ Úsalo si tus columnas están en snake_case
});

Comentario.createComentario = async ({ comentario, idUser, idTicket }) =>
    Comentario.create({
        comentario,
        id_user: idUser,
        id_ticket: idTicket,
    });

Comentario.getComentariosByTicket = async (idTicket) =>
    Comentario.findAll({
        where: { id_ticket: idTicket },
    });

export default Comentario;