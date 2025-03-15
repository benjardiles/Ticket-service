import { updateTicketStatus } from '../../../services/tickets';

export default async (req, res) => {
    const { status } = req.body;
    const { idTicket } = req.params;

    if (!idTicket || !status) {
        console.log(status);
        console.log(idTicket);
        
        
        return res.status(400).send({
            error: true,
            message: 'Ticket ID and status are required',
        });
    }

    try {
        const { error, message, data } = await updateTicketStatus({idTicket, status});

        const code = error ? 400 : 200;

        return res.status(code).send({
            error,
            message,
            data,
        });
    } catch (error) {
        console.error({ error });
        return res.status(500).send({
            error: true,
            message: 'An error occurred while updating the ticket status',
        });
    }
};