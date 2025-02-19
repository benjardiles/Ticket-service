import { Ticket } from "../../models";

import makeCreateTicket from "./createTicket";
import makeGetTicket from "./getTicket";

const getTicket = makeGetTicket({ Ticket });
const createTicket = makeCreateTicket({ Ticket});

export{
    getTicket,
    createTicket
}