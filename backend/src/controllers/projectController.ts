import { Request, Response } from "express";
import {
  createProject,
  getProjectById,
  getAllProjects,
} from "../models/projectModel";

export const createNewProject = async (req: Request, res: Response) => {
  try {
    const project = await createProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getProject = async (req: Request, res: Response) => {
  try {
    const project = await getProjectById(parseInt(req.params.id));
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllProjectsHandler = async (_req: Request, res: Response) => {
  try {
    const projects = await getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
