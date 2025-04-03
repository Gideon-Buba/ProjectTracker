import { Request, Response } from "express";
import { createComment, getCommentsByTaskId } from "../models/commentModel";

export const addComment = async (req: Request, res: Response) => {
  try {
    const comment = await createComment(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await getCommentsByTaskId(parseInt(req.params.task_id));
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
