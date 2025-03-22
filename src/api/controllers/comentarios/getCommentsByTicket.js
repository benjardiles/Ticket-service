import makeGetCommentsByTicket from "../../../services/comentaries/getCommentsByTicket";
import Comentario from "../../../models/comentario.model";

export default async (req, res) => {
    const { idTicket } = req.params;

    if (!idTicket) {
        return res.status(400).json({
            error: true,
            message: "Ticket ID is required.",
        });
    }

    try {
        const getCommentsService = makeGetCommentsByTicket({ Comentario });

        const result = await getCommentsService({ idTicket });

        if (result.error) {
            return res.status(500).json({
                error: true,
                message: result.message,
            });
        }

        return res.status(200).json({
            error: false,
            message: result.message,
            data: result.data,
        });
    } catch (error) {
        console.error("Error in getCommentsByTicket controller:", error);
        return res.status(500).json({
            error: true,
            message: "An error occurred while retrieving comments.",
        });
    }
};