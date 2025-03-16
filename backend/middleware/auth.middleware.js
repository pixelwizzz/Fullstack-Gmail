import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// Middleware to protect routes that require authentication
export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: "Not authorized - No token provided" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: "Not authorized - Invalid token" });
        }

        // Get user from token
        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        // Check if user is active
        if (user.status !== "active") {
            return res.status(401).json({ error: "Account is not active" });
        }

        // Check if account is locked
        if (user.isLocked()) {
            const timeLeft = Math.ceil((user.lockUntil - Date.now()) / 1000 / 60);
            return res.status(423).json({
                error: `Account is locked. Try again in ${timeLeft} minutes`
            });
        }

        // Attach user to request object
        req.user = user;
        next();
    } catch (error) {
        console.error("Auth middleware error:", error);
        res.status(401).json({ error: "Not authorized - Invalid token" });
    }
};

// Middleware to validate user input for registration
export const validateRegistration = (req, res, next) => {
    const { firstName, lastName, username, email, password } = req.body;

    // Check if all required fields are present
    if (!firstName || !lastName || !username || !email || !password) {
        return res.status(400).json({ 
            error: "All fields are required" 
        });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            error: "Invalid email format" 
        });
    }

    // Validate username format (alphanumeric and underscore only)
    const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/;
    if (!usernameRegex.test(username)) {
        return res.status(400).json({ 
            error: "Username must be 3-30 characters long and can only contain letters, numbers, and underscores" 
        });
    }

    // Validate password strength
    if (password.length < 6) {
        return res.status(400).json({ 
            error: "Password must be at least 6 characters long" 
        });
    }

    // Validate name lengths
    if (firstName.length < 2 || firstName.length > 30 || lastName.length < 2 || lastName.length > 30) {
        return res.status(400).json({ 
            error: "First and last names must be between 2 and 30 characters long" 
        });
    }

    next();
};

// Middleware to validate login input
export const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ 
            error: "Email and password are required" 
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            error: "Invalid email format" 
        });
    }

    next();
};

// Rate limiting middleware for login attempts
const loginAttempts = new Map();
export const rateLimitLogin = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxAttempts = 5;

    const attempts = loginAttempts.get(ip) || [];
    const recentAttempts = attempts.filter(timestamp => now - timestamp < windowMs);

    if (recentAttempts.length >= maxAttempts) {
        return res.status(429).json({
            error: "Too many login attempts. Please try again later."
        });
    }

    recentAttempts.push(now);
    loginAttempts.set(ip, recentAttempts);

    next();
}; 