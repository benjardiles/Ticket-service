export default function makeGetTickets({ Ticket, Pagination }) {
    return async function getTickets({
        filters,
        page,

    }) {
        try {
            const { limit, offset } = Pagination.getPagination({ page,size : 10

             });
            const {count, rows } = await Ticket.getTickets({
                idUser: filters.idUser,
                limit,
                offset,
            });

            console.log({count, rows});
            
            return {
                error: false,
                message: 'Tickets found',
                data: {
                    rows,
                    count,

                },
            }
        } catch (error) {
            console.log({error});
            return {
                error: true,
                message: 'An error occurred when getting the tickets',
            }
            
        }
    }
} 