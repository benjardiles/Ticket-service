import { createAdmin } from "../../../services/auth";

export default async (req, res) => {
    const admin = req.body;

    try {
        const { error, message, data } = await createAdmin({admin});

        const code = error ? 400 : 200;

        return res.status(code).send({
            error,
            message,
            data,
        });
        
    } catch (error) {
        console.log({ error });
        return res.status(500).send({
            error: true,
            message: 'An error occurred when creating the admin',
        });
    }
}