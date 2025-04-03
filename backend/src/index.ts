import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";
import commentRoutes from "./routes/commentRoutes";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/comments", commentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
