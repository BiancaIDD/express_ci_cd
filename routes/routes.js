import  express from "express";
import { isUserAuthenticated } from "../middlewares/auth.js"

import {createUser, getUser}  from "../controllers/user.js";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post('/users', createUser);

router.get('/users', isUserAuthenticated ,getUser )

router.post('/auth', login)

export default router;
