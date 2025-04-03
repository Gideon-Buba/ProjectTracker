import express from "express";
import {
  createNewProject,
  getProject,
  getAllProjectsHandler,
} from "../controllers/projectController";

const router = express.Router();

router.post("/", createNewProject);
router.get("/:id", getProject);
router.get("/", getAllProjectsHandler);

export default router;
