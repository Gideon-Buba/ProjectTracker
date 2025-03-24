import { Request, Response } from "express";
import { Project } from "../models/Project";
import { Team } from "../models/Team";
import mongoose from "mongoose";


// Create a new project
export const createProject = async (req: Request, res: Response) => {
    try {
        const { name, description, teams } = req.body;

        // Create the project first
        const project = new Project({ name, description });
        await project.save();

        // Create teams dynamically and store their IDs
        const createdTeams = await Promise.all(
            teams.map(async (team: { name: string; members: string[] }) => {
                const newTeam = new Team({
                    name: team.name,
                    members: team.members.map((memberId) => new mongoose.Types.ObjectId(memberId)), // Convert to ObjectId
                    project: project._id // Assign project ID
                });

                await newTeam.save();
                return newTeam._id; // Return the team ID
            })
        );

        // Update the project with the created team IDs
        project.teams = createdTeams;
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

