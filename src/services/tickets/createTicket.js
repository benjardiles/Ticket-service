export default function makeCreateTicket({
    Ticket,
}) {
    return async function createTicket({
        description,
        filePath,
        idUser
    })

     {
        try {
            const newTicket = await Ticket.createTicket({
                description,
                filePath,
                idUser
            })

            return {
                error: false,
                message: 'Ticket created successfully',
                data: {
                    idTicket: newTicket.id_ticket,
                     description: newTicket.description,
                     filePath: newTicket.file_path,
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