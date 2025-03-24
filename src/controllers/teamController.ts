import { Request, Response } from "express";
import { Team } from "../models/Team";

// Create a new team
export const createTeam = async (req: Request, res: Response) => {
    try {
        const team = new Team(req.body);
        await team.save();
        res.status(201).json(team);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get all teams
export const getTeams = async (req: Request, res: Response) => {
    try {
        const teams = await Team.find().populate("members");
        res.status(200).json(teams);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single team by ID
export const getTeamById = async (req: Request, res: Response) => {
    try {
        const team = await Team.findById(req.params.id).populate("members");
        if (!team) return res.status(404).json({ error: "Team not found" });
        res.status(200).json(team);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
