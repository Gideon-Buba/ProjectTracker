import express from "express";
import { createNewProject, getProject } from "../controllers/projectController";

const router = express.Router();

router.post("/", createNewProject);
router.get("/:id", getProject);

export default router;
