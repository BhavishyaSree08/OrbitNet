import express from "express";
import {login,logout,signup,getCurrentUser} from "../controllers/authControllers.js"
import {protectRoute} from "../middleware/authMiddleware.js"

const router=express.Router();

router.path("/signup",signup);
router.path("/login",login);
router.path("/logout",logout);

router.get("/me",protectRoute,getCurrentUser)

export default router;
