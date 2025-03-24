import express, {RequestHandler} from "express";
import { createTask, getTasks, getTaskById } from "../controllers/taskController";

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTaskById as RequestHandler);

export default router;
