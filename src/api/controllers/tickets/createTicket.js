import {createTicket} from '../../../services/tickets';

export default async (req, res) => {
    const { 
        description,
        file_path: filePath,
        id_user: idUser,
    } = req.body;

    try {
        const { error, message, data } = await createTicket({
            description,
            filePath,
            idUser,
        });

        const code = error ? 400 : 200;

        return res.status(code).send({
            error,
            message,
            data,
        })
    } catch (error) {
        console.log({error});
        return res.status(500).send({
            error: true,
            message: 'An error occurred when creating the ticket',
        });
    }
};


