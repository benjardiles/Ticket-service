import express from "express";
import { login } from "../api/controllers/auth/login.js";
import { signup } from "../api/controllers/auth/signup.js";
import { getUser } from "../api/controllers/auth/getUser.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/user", getUser);

export default router;