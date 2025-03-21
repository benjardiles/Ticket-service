import express from "express";
import createComment from "../controllers/comentaries/createComentaries";
import getCommentsByTicket from "../controllers/comentaries/getCommentsByTicket";

const router = express.Router();

// Ruta para crear un comentario
router.post("/", createComment);

// Ruta para obtener comentarios por ticket
router.get("/ticket/:idTicket", getCommentsByTicket);

export default router;