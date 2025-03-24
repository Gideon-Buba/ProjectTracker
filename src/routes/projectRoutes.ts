import express, {RequestHandler} from "express";
import { createProject, getProjects, getProjectById } from "../controllers/projectController";

const router = express.Router();

router.post("/", createProject);
router.get("/", getProjects );
router.get("/:id", getProjectById as RequestHandler);

export default router;
