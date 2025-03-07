import db from "../config/db";

const Admin = db.sequelize.define("admin", {
    id_admin: {
        type: db.DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: db.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: db.DataTypes.STRING,
        allowNull: false,
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
    tableName: 'admin',
    timestamps: true,
});

// Métodos estáticos para el modelo Admin

Admin.createAdmin = async ({ id_admin, email, password }) =>
    Admin.create({ id_admin, email, password });

Admin.deleteAdmin = async ({ idAdmin }) =>
    Admin.destroy({
        where: {
            id_admin: idAdmin,
        },
    });

Admin.getById = async ({ idAdmin }) =>
    Admin.findOne({
        where: {
            id_admin: idAdmin,
        },
    });

Admin.getByEmail = async ({ email }) =>
    Admin.findOne({
        where: {
            email,
        },
    });

export default Admin;