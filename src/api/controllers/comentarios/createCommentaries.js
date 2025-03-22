import makeCreateComment from "../../../services/comentaries/createComentaries";

export default async (req, res) => {
  const { comentario, idAdmin, idTicket } = req.body; // Cambiado a idAdmin

  if (!comentario || !idAdmin || !idTicket) {
    return res.status(400).json({
      error: true,
      message: "All fields (comentario, idAdmin, idTicket) are required.",
    });
  }

  try {
    const createCommentService = makeCreateComment({
      Comentario: require("../../../models/comentario.model").default,
    });

    const result = await createCommentService({
      comentario,
      idAdmin, // Cambiado de idUser a idAdmin
      idTicket,
    });

    if (result.error) {
      return res.status(500).json({
        error: true,
        message: result.message,
      });
    }

    return res.status(201).json({
      error: false,
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    console.error("Error in createCommentaries controller:", error);
    return res.status(500).json({
      error: true,
      message: "An error occurred while creating the comment.",
    });
  }
};