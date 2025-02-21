import express from "express";

import getTicketController from '../controllers/tickets/getTicket';
import createTicket from "../controllers/tickets/createTicket";
import deleteTicket from "../controllers/tickets/deleteTicket";
import getTickets from "../controllers/tickets/getTickets";

const router = express.Router();


router.get(
    '/:idTicket',
    getTicketController,

)
router.get(
    '/',
    getTickets)
    
router.post(
    '/',
    createTicket

)
router.delete(
    '/:idTicket',
    deleteTicket
)

export default router;