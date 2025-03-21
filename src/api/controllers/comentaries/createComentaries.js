import makeCreateComment from '../../../services/comentaries/createComentaries';
import Comentario from '../../../models/comentario.model';

const createComment = makeCreateComment({ Comentario });

export default async (req, res) => {
    const { comentario, id_ticket: idTicket, id_user: idUser } = req.body;

    try {
        const result = await createComment({ comentario, idUser, idTicket });

        return res.status(result.error ? 400 : 200).send(result);
    } catch (error) {
        console.log({ error });
        return res.status(500).send({
            error: true,
            message: 'An error occurred when creating the comment',
        });
    }
};