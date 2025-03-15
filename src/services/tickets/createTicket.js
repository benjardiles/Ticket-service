export default function makeCreateTicket({
    Ticket,
}) {
    return async function createTicket({
        description,
        idUser
    })

     {
        try {
            const newTicket = await Ticket.createTicket({
                description,
                idUser
            })

            return {
                error: false,
                message: 'Ticket created successfully',
                data: {
                    idTicket: newTicket.id_ticket,
                     description: newTicket.description,
                    idUser: newTicket.id_user
                }
            }
            
        } catch (error) {
            console.log({error});
            return {
                error: true,
                message: 'An error occurred when creating the ticket',
            }
        }

    }
}