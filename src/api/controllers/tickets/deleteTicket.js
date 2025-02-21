import {deleteTicket} from '../../../services/tickets';

export default async (req, res) => {
    const{
        idTicket,
    
    } = req.params
    try {
        const{ error, message, data} = await deleteTicket({idTicket});
        const code = error ? 400 : 200;
        return res.status(code).send({
            error,
            message,
            data,
        })
        
    } catch(error){
        console.log({error});
        return res.status(500).send({
            error: true,
            message: 'An error ocurred when delete the ticket',
        });
    }
};
