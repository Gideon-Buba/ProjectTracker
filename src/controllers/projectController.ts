import { Request, Response } from "express";
import { Project } from "../models/Project";
import { Team } from "../models/Team";
import { Member } from "../models/Member";
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
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single project by ID
export const getProjectById = async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const project = await Project.findById(req.params.id).populate("teams");
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        return res.status(200).json(project);
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
};

export const addTeamToProject = async (req: Request, res: Response) => {
    try {
        const { projectId } = req.params;
        const { name, members = [] } = req.body; // ✅ Default members to an empty array if not provided

        // Validate project existence
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        // Create a new team and associate it with the project
        const newTeam = new Team({
            name,
            members: members.map((memberId: string) => new mongoose.Types.ObjectId(memberId)), // Convert to ObjectId
            project: new mongoose.Types.ObjectId(projectId) // Assign project ID
        });

        await newTeam.save();

        // Add the team to the project's teams array
        project.teams.push(newTeam._id as mongoose.Schema.Types.ObjectId); // Explicitly cast to ObjectId
        await project.save();

        res.status(200).json(project);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Add members to an existing team
export const addMembersToTeam = async (req: Request, res: Response) => {
    try {
        const { teamId } = req.params;
        const { memberNames } = req.body;

        // Validate team existence
        const team = await Team.findById(teamId);
        if (!team) {
            return res.status(404).json({ message: "Team not found" });
        }

        // Find members by names
        const members = await Member.find({ name: { $in: memberNames } });
        if (members.length !== memberNames.length) {
            return res.status(404).json({ message: "One or more members not found" });
        }

        // Update the team's members array
        team.members = members.map((member) => member._id as mongoose.Schema.Types.ObjectId);
        await team.save();

        // Populate the members field to include member names
        const populatedTeam = await Team.findById(teamId).populate("members");

        res.status(200).json(populatedTeam);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
