import express from "express";
import { sendEmail, getEmails } from "../controllers/email.controller.js";

const router = express.Router();

// Test route
router.get("/test", (req, res) => {
    res.json({ message: "Email route is working" });
});

// Email routes
router.post("/send", sendEmail);
router.get("/", getEmails);

export default router; 