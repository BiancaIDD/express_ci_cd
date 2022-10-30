import  express from "express";

import {createUser}  from "../controllers/user.js";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post('/users', createUser);

router.post('/auth', login)

export default router;
