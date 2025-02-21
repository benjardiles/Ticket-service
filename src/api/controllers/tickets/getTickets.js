

import { getTickets } from "../../../services/tickets";

export default async (req, res) => {
    console.log({query: req.query});
    const { idUser, page } = req.query;

    try {
        const { error, message, data } = await getTickets({ filters: { idUser } , page });

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
            message: 'An error occurred when retrieving the tickets',
        });
    }

}