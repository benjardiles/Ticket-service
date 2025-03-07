import jwt from 'jsonwebtoken';
import bycrypt from 'bcrypt';
import { Admin } from '../../models';

import makeCreateAdmin from './createAdmin';
import makeCreateToken from './createToken';

const createAdmin = makeCreateAdmin({ Admin, bycrypt });
const createToken = makeCreateToken({ Admin, jwt });

export {
    createAdmin,
    createToken
}