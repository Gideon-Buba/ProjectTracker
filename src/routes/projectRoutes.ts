import express, { RequestHandler } from 'express';
import { createProject, getProjects, getProjectById, addTeamToProject, addMembersToTeam } from '../controllers/projectController';

const router = express.Router();

// Create a new project
router.post('/', createProject as RequestHandler);

// Get all projects
router.get('/', getProjects as RequestHandler);

// Get a single project by ID
router.get('/:id', getProjectById as RequestHandler);

// Add a team to a project
router.post('/:projectId/teams', addTeamToProject as RequestHandler);

// Add members to an existing team
router.put('/teams/:teamId/members', addMembersToTeam as RequestHandler);

export default router;
