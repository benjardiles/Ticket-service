import express from "express";

import createAdmin from '../controllers/auth/createAdmin';
import loginController from '../controllers/auth/login';
import { adminBasic } from "../middlewares/authBasic";

const router = express.Router();

router.post(
    '/register/admin',
    createAdmin
)

router.post(
    '/login/admin',
    adminBasic,
    loginController
)

export default router;