import { Request, Response } from "express";
import { createTask, getTaskById } from "../models/taskModel";

export const createNewTask = async (req: Request, res: Response) => {
  try {
    const task = await createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const task = await getTaskById(parseInt(req.params.id));
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
