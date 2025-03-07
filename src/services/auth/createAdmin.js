export default function makeCreateAdmin({ Admin, bycrypt }) {
    return async function createAdmin({
        admin
    }) { 
        try {
            console.log({ admin});
            
            const existAdmin = await Admin.getByEmail({ email: admin.email });

            if (!existAdmin) {

                const hashPassword = await bycrypt.hash(admin.password, 10);

                admin.password = hashPassword;
                const newAdmin = await Admin.createAdmin(
                    admin,
                );

                return {
                    error: false,
                    message: 'Admin created successfully',
                    data: newAdmin,
                };
            }

            return {
                error: true,
                message: 'The admin already exists',
                data: null,
            };
            
        } catch (error) {
            console.log({ error });
            
            return {
                error: true,
                message: 'An error occurred while creating the admin',
                data: null,
            };
        }
    }
}