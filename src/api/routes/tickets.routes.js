import express from "express";

import getTicketController from '../controllers/tickets/getTicket';
import createTicket from "../controllers/tickets/createTicket";
import deleteTicket from "../controllers/tickets/deleteTicket";

const router = express.Router();


router.get(
    '/:idTicket',
    getTicketController,
)
router.post(
    '/',
    createTicket

)
router.delete(
    '/:idTicket',
    deleteTicket
)

export default router;