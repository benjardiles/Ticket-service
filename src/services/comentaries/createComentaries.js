export default function makeCreateComment({
    Comentario,
}) {
    return async function createComment({
        comentario,
        idUser,
        idTicket
    }) {
        try {
            const newComment = await Comentario.createComentario({
                comentario,
                idUser,
                idTicket
            });

            return {
                error: false,
                message: 'Comment created successfully',
                data: {
                    idComentario: newComment.id_comentario,
                    comentario: newComment.comentario,
                    idUser: newComment.id_user,
                    idTicket: newComment.id_ticket
                }
            };
        } catch (error) {
            console.log({ error });
            return {
                error: true,
                message: 'An error occurred when creating the comment',
            };
        }
    };
}