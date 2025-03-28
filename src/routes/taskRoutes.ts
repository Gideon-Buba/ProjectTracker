import express from "express";
import { createNewTask, getTask } from "../controllers/taskController";

const router = express.Router();

router.post("/", createNewTask);
router.get("/:id", getTask);

export default router;
