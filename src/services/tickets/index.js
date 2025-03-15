import { Ticket } from "../../models";

import makeCreateTicket from "./createTicket";
import makeGetTicket from "./getTicket";
import makeDeleteTicket from "./deleteTicket";
import makeGetTickets from "./getTickets";
import Pagination from '../../utils/pagination.utils';
import makeUpdateTicketStatus from "../tickets/UpdateTicketStatus";

const getTicket = makeGetTicket({ Ticket });
const createTicket = makeCreateTicket({ Ticket});
const deleteTicket = makeDeleteTicket({ Ticket });
const getTickets = makeGetTickets({ Ticket,Pagination });
const updateTicketStatus = makeUpdateTicketStatus({ Ticket });

export{
    getTicket,
    createTicket,
    deleteTicket,
    getTickets,
    updateTicketStatus,

} 