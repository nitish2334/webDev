import express from 'express';
import{Loginuser,
     Logoutuser,
     Registeruser,
} from "../controllers/auth.controller.js";
import { sampleMiddleware,
     sampleMiddleware2,

 } from '../middlewares/auth.middleware.js';

const router = express.Router();


router.post("/login", sampleMiddleware2, Loginuser);
router.post("/register",sampleMiddleware, sampleMiddleware, Registeruser);
router.get("/logout", sampleMiddleware, Logoutuser);



export default router;
