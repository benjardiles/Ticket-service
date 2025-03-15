export default function makeUpdateTicketStatus({ Ticket }) {
    return async function updateTicketStatus({idTicket, status}) {
        try {
            
            const updatedTicket = await Ticket.updateTicketStatus(idTicket, status);
            

            if (!updatedTicket) {
                
                return {
                    error: true,
                    message: 'Ticket not found or could not be updated',
                };
            }
            

            return {
                error: false,
                message: 'Ticket status updated successfully',
                data: {
                    idTicket: updatedTicket.idTicket,
                    status: updatedTicket.status,
                },
            };
        } catch (error) {
            console.error({ error });
            return {
                error: true,
                message: 'An error occurred while updating the ticket status',
            };
        }
    };
}