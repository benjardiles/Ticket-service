export default function makeDeleteTicket({
    Ticket,
}) {
    return async function deleteTicket({
        idTicket,
    }) {
        try {
            const ticket = await Ticket.getById({
                idTicket,
            });

            if (!ticket) {
                return {
                    error: true,
                    message: 'The ticket does not exist',
                }
            }

            await Ticket.delete({
                idTicket,
            })

            return {
                error: false,
                message: 'Ticket deleted successfully',
            }
        } catch (error) {
            console.log({error});
            return {
                error: true,
                message: 'An error occurred when deleting the ticket',
            }
        }
    }
}