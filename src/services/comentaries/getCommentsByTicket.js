import Comentario from "../../../models/comentario.model";

export default async function getCommentsByTicket(idTicket) {
    try {
        const comentarios = await Comentario.findAll({
            where: { id_ticket: idTicket },
            order: [["createdAt", "ASC"]],
        });

        return {
            error: false,
            message: "Comments retrieved successfully",
            data: comentarios,
        };
    } catch (error) {
        console.error("Error fetching comments:", error);
        return {
            error: true,
            message: "An error occurred while retrieving comments",
        };
    }
}