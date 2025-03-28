import express, {RequestHandler} from "express";
import {createMember, getMembers, getMemberById, getMembersByName} from "../controllers/memberController";

const router = express.Router();

router.post("/", createMember as RequestHandler);
router.post("/findByNames", getMembersByName as RequestHandler);
// router.get("/", getMembers);
// router.get("/:id", getMemberById as RequestHandler);

export default router;
