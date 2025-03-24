import express, {RequestHandler} from "express";
import { createMember, getMembers, getMemberById } from "../controllers/memberController";

const router = express.Router();

router.post("/", createMember);
router.get("/", getMembers);
router.get("/:id", getMemberById as RequestHandler);

export default router;
