export default function makeCreateComment({ Comentario }) {
    return async function createComment({ comentario, idAdmin, idTicket }) { // Cambiado a idAdmin
      try {
        console.log("comentario", comentario);
        console.log("idAdmin", idAdmin);
        console.log("idTicket", idTicket);
        
        const newComment = await Comentario.create({
            
            comentario,
            id_ticket: idTicket,
            idAdmin, // Cambiado de id_user a idAdmin
            
        });

  
        return {
          error: false,
          message: "Comment created successfully",
          data: {
            idComentario: newComment.id_comentario,
            comentario: newComment.comentario,
            idAdmin: newComment.idAdmin, // Cambiado de id_user a idAdmin
            idTicket: newComment.id_ticket,
          },
        };
      } catch (error) {
        console.log({ error });
        return {
          error: true,
          message: "An error occurred when creating the comment",
        };
      }
    };
  }