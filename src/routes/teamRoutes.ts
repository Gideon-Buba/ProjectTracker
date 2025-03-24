import express, {RequestHandler} from "express";
import { createTeam, getTeams, getTeamById } from "../controllers/teamController";

const router = express.Router();

router.post("/", createTeam);
router.get("/", getTeams);
router.get("/:id", getTeamById as RequestHandler);

export default router;
