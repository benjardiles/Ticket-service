import express from "express";
import multer from "multer";
import fileController from "../controllers/tickets/fileController";

import getTicketController from "../controllers/tickets/getTicket";
import createTicket from "../controllers/tickets/createTicket";
import deleteTicket from "../controllers/tickets/deleteTicket";
import getTickets from "../controllers/tickets/getTickets";
import UpdateTicketStatus from "../controllers/tickets/UpdateTicketStatus";

const upload = multer({ dest: "./uploads" });
const router = express.Router();

// Rutas relacionadas con archivos
router.post("/upload-file", upload.single("file"), fileController.uploadFile);
router.put("/update-file", upload.single("file"), fileController.updateFile);
router.delete("/delete-file", fileController.deleteFile);
router.get("/get-all-files", fileController.getAllFiles);

// Rutas relacionadas con tickets
router.get("/:idTicket", getTicketController);
router.get("/", getTickets);
router.post("/", createTicket);
router.delete("/:idTicket", deleteTicket);
router.put("/:idTicket", UpdateTicketStatus);

export default router;