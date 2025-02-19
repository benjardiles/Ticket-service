export default function makeGetTicket({ Ticket }) {
    return async function getTicket({
        idTicket,
    }) {
        try {
            const ticket = await Ticket.getById({
                idTicket,
            });

            if (!ticket) {
                return {
                    error: true,
                    message: 'Ticket not found',
                }
            }

            console.log({ticket});
            
            return {
                error: false,
                message: 'Ticket found',
                data: ticket,
            }
        } catch (error) {
            console.log({error});
            return {
                error: true,
                message: 'An error occurred when getting the ticket',
            }
            
        }
    }
}