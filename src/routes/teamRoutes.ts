import express, { RequestHandler } from 'express';
import { addMembersToTeam } from '../controllers/projectController';

const router = express.Router();

// Add members to an existing team
router.put('/:teamId/members', addMembersToTeam as RequestHandler);

export default router;
