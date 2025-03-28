import express from "express";
import mongoose from "mongoose";
import projectRoutes from "./routes/projectRoutes";
import teamRoutes from "./routes/teamRoutes";
import memberRoutes from "./routes/memberRoutes";
import taskRoutes from "./routes/taskRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 8000;
mongoose
    .connect(process.env.MONGO_URI || "mongodb://localhost:27017/project-tracker")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((error) => console.log(error));
