import { Request, Response } from "express";
import { Task } from "../models/Task";

// Create a new task
export const createTask = async (req: Request, res: Response) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single task by ID
export const getTaskById = async (req: Request, res: Response) => {
    try {
        const task = await Task.findById(req.params.id).populate("member");
        if (!task) return res.status(404).json({ error: "Task not found" });
        res.status(200).json(task);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
