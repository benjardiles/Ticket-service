export default function makeGetCommentsByTicket({ Comentario }) {
    return async function getCommentsByTicket({ idTicket }) {
        try {
            const comentarios = await Comentario.getComentariosByTicket(idTicket);

            if (!comentarios || comentarios.length === 0) {
                return {
                    error: false,
                    message: "No comments found for this ticket.",
                    data: [],
                };
            }

            return {
                error: false,
                message: "Comments retrieved successfully.",
                data: comentarios,
            };
        } catch (error) {
            console.error("Error in getCommentsByTicket service:", error);
            return {
                error: true,
                message: "An error occurred while retrieving comments.",
            };
        }
    };
}