import { createToken } from "../../../services/auth";

export default async (req, res) => {    
    try {
        const { error, message, data } = await createToken({ email: req.user });

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
            message: 'An error occurred during login',
        });
    }
};