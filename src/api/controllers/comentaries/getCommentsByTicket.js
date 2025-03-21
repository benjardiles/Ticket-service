import Comentario from "../../../models/comentario.model";

export default async (req, res) => {
    const { idTicket } = req.params;

    if (!idTicket) {
        return res.status(400).json({
            error: true,
            message: "Ticket ID is required",
        });
    }

    try {
        const comentarios = await Comentario.findAll({
            where: { id_ticket: idTicket },
            order: [["createdAt", "ASC"]], // Corregido para usar el campo adecuado
        });

        return res.status(200).json({
            error: false,
            message: "Comments retrieved successfully",
            data: comentarios,
        });
    } catch (error) {
        console.error("Error fetching comments:", error);
        return res.status(500).json({
            error: true,
            message: "An error occurred while retrieving comments",
        });
    }
};