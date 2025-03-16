// Creating Nodejs Server
import express from "express"; // react style
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import emailRoute from "./routes/email.route.js";

dotenv.config();

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Server is working!" });
});

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/email", emailRoute);

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});