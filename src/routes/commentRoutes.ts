import express from "express";
import { addComment, getComments } from "../controllers/commentController";

const router = express.Router();

router.post("/", addComment);
router.get("/task/:task_id", getComments);

export default router;
