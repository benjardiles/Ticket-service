export default function makeCreateToken({ jwt, Admin }) {
    return async function loginUser({ email }) {
        try {
            const user = await Admin.getByEmail({ email });

            if (!user) {
                return {
                    error: true,
                    message: 'User not found',
                    data: {
                        auth: false,
                    }
                };
            }

            const accessToken = jwt.sign({
                idAdmin: user.id_admin,
                email: user.email,
                name: user.name,
            }, "hola", {
                expiresIn: "8h",
            });

            const refreshToken = jwt.sign({
                idAdmin: user.id_admin,
                email: user.email,
                name: user.name,
            }, "hola", {
                expiresIn:  "8h",
            });

            return {
                error: false,
                message: 'Login successful',
                data: {
                    idAdmin: user.id_admin,
                    email: user.email,
                    name: user.name,
                    accessToken,
                    refreshToken,
                    auth: true,
                }
            };

        } catch (error) {
            console.log({ error });
            return {
                error: true,
                message: 'An error occurred during login',
                data: {
                    auth: false,
                }
            };
        }
    };
}