import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

// Generate JWT Token
const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET || 'fallback_secret', {
        expiresIn: "15d",
    });
};

// @desc    Register a new user
// @route   POST /api/v1/user/register
// @access  Public
export const registerUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                error: "Email already registered"
            });
        }

        // Create new user
        const newUser = await User.create({
            fullname,
            email,
            password
        });

        // Generate token
        const token = generateToken(newUser._id);

        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            email: newUser.email,
            token
        });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ error: "Internal server error during registration" });
    }
};

// @desc    Login user
// @route   POST /api/v1/user/login
// @access  Public
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Check password
        const isPasswordValid = await user.comparePassword(password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Generate token
        const token = generateToken(user._id);

        res.json({
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            token
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error during login" });
    }
};

// @desc    Logout user
// @route   POST /api/users/logout
// @access  Private
export const logoutUser = async (req, res) => {
    try {
        res.cookie("jwt", "", {
            httpOnly: true,
            expires: new Date(0)
        });
        
        res.json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Logout error:", error);
        res.status(500).json({ error: "Internal server error during logout" });
    }
};

// @desc    Get current user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            profilePic: user.profilePic,
            settings: user.settings
        });
    } catch (error) {
        console.error("Profile fetch error:", error);
        res.status(500).json({ error: "Internal server error while fetching profile" });
    }
};