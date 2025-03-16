import express from "express";
import { registerUser, loginUser } from "../controllers/user.controller.js";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Test route
router.get("/test", (req, res) => {
    res.json({ message: "User route is working" });
});

export default router; 