import express from "express";
import { registerUser, loginUser, logoutUser, getUserProfile } from "../controllers/user.controller.js";
import { 
    protectRoute, 
    validateRegistration, 
    validateLogin, 
    rateLimitLogin 
} from "../middleware/auth.middleware.js";

const router = express.Router();

// Public routes
router.post("/register", validateRegistration, registerUser);
router.post("/login", validateLogin, rateLimitLogin, loginUser);

// Protected routes
router.post("/logout", protectRoute, logoutUser);
router.get("/profile", protectRoute, getUserProfile);

export default router; 