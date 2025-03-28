import { Request, Response } from "express";
import { Member } from "../models/Member";
import mongoose from "mongoose";

// Create a new member
export const createMember = async (req: Request, res: Response) => {
    try {
        const { name, role, team } = req.body;

        // Create a new member
        const newMember = new Member({
            name,
            role,
            team: new mongoose.Types.ObjectId(team), // Assign team ID
        });

        await newMember.save();
        res.status(201).json(newMember);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get all members
export const getMembers = async (req: Request, res: Response) => {
    try {
        const members = await Member.find().populate("team");
        res.status(200).json(members);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single member by ID
export const getMemberById = async (req: Request, res: Response) => {
    try {
        const member = await Member.findById(req.params.id).populate("team");
        if (!member) return res.status(404).json({ error: "Member not found" });
        res.status(200).json(member);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Update a member by ID
export const updateMember = async (req: Request, res: Response) => {
    try {
        const member = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!member) return res.status(404).json({ error: "Member not found" });
        res.status(200).json(member);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a member by ID
export const deleteMember = async (req: Request, res: Response) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id);
        if (!member) return res.status(404).json({ error: "Member not found" });
        res.status(200).json({ message: "Member deleted successfully" });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getMembersByName = async (req: Request, res: Response) => {
    try {
        const { memberNames } = req.body; // Expecting an array of names
        const members = await Member.find({ name: { $in: memberNames } });

        if (members.length === 0) {
            return res.status(404).json({ message: "One or more members not found" });
        }

        res.status(200).json(members);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
