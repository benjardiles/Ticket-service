import bycrypt from 'bcrypt';
import passport from 'passport';
import { BasicStrategy } from 'passport-http';

import { Admin } from '../../models';

const checkAdmin = async ({ email, password }) => {
    try {
        const user = await Admin.getByEmail({
            email
        });

        if (user && user.email === email) {
            return  await bycrypt.compare(password, user.password);           
        }
        return false;
    } catch (error) {
        return false;
    }
}

passport.use(
    "adminBasic",
    new BasicStrategy(async (email, password, done) => {
        try {
            const isValid = await checkAdmin({ email, password });

            if (!isValid) {
                return done(null, false);
            }

            return done(null, 
                email,
            );
        } catch (error) {
            console.log({error});
            
            return done(error);
        }
    }
    )
);

const adminBasic = (req, res, next) => {
    passport.authenticate("adminBasic",  {
        session: false,
    })(req, res, next);
}

export {
    adminBasic,
}