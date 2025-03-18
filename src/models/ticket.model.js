import db from "../config/db";

const Ticket = db.sequelize.define("ticket", {
    id_ticket: {
        type: db.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    status: {
        type: db.DataTypes.ENUM('OPEN', 'IN_PROGRESS', 'CLOSED'),
        allowNull: false,
        defaultValue: 'OPEN',
    },
    description: {
        type: db.DataTypes.TEXT,
        allowNull: false,
    },
    file_path: {
        type: db.DataTypes.STRING,
    },
    id_user: {
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
    tableName: 'ticket',
    timestamps: true,
});

Ticket.createTicket = async ({ description, filePath, idUser }) =>
    Ticket.create({
        description,
        file_path: filePath,
        id_user: idUser,
    });

Ticket.delete = async ({ idTicket }) => 
    Ticket.destroy({
        where: {
            id_ticket: idTicket,
        },
    });

Ticket.getById = async ({ idTicket }) => 
    Ticket.findOne({
        where: {
            id_ticket: idTicket,
        },
    });

Ticket.getTickets = async ({ idUser, status, offset, limit }) => {
    const where = {
        ...idUser && { id_user: idUser },
        ...status && { status },
    };
    const count = await Ticket.count({
        where,
    });
    
    const rows = await Ticket.findAll({
        where,
        offset: offset || undefined,
        limit: limit || undefined,
    });
    return {
        count,
        rows,
    };
};

// Nueva función para actualizar el estado del ticket
Ticket.updateTicketStatus = async (idTicket, status) => {
    // Convertir a mayúsculas para que coincida con el ENUM
    const normalizedStatus = status.toUpperCase();  

    // Verificar si el estado es válido
    const validStatuses = ["OPEN", "IN_PROGRESS", "CLOSED"];
    if (!validStatuses.includes(normalizedStatus)) {
        return { error: true, message: "Invalid status value" };
    }

    const ticket = await Ticket.findByPk(idTicket);
    if (!ticket) {
        return { error: true, message: "Ticket not found" };
    }

    ticket.status = normalizedStatus;
    await ticket.save();

    return { error: false, message: "Ticket status updated successfully", data: ticket };
};

export default Ticket;