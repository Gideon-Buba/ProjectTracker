import { Request, Response } from "express";
import { Project } from "../models/Project";
import { Team } from "../models/Team";
import mongoose from "mongoose";


// Create a new project
export const createProject = async (req: Request, res: Response) => {
    try {
        // Check if a project with the same name already exists
        const existingProject = await Project.findOne({ name: req.body.name });

        if (existingProject) {
            return res.status(400).json({ error: "Project with this name already exists" });
        }

        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get all projects
export const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await Project.find().populate("teams");
        res.status(200).json(projects);
    } catch (error: any) {  // ✅ Explicitly type error as `any`
        res.status(500).json({ error: error.message });
    }
};

// Get a single project by ID
export const getProjectById = async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        return res.status(200).json(project);
    } catch (error: any) {  // ✅ Explicitly type error as `any`
        return res.status(500).json({ error: error.message });
    }
};

export const addTeamToProject = async (req: Request, res: Response) => {
    try {
        const { projectId } = req.params;
        const { name, members } = req.body;

        // Validate project existence
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        // Create a new team and associate it with the project
        const newTeam = new Team({
            name,
            members: members.map((memberId: string) => new mongoose.Types.ObjectId(memberId)), // Convert to ObjectId
            project: projectId // Assign project ID
        });

        await newTeam.save();

        // Add the new team to the project
        project.teams.push(newTeam._id);
        await project.save();

        res.status(200).json(project);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

