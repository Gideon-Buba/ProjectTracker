import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import { Task } from '../models/Task';

const router = express.Router();

// Create a new task
router.post('/', (async (req: Request, res: Response, next: NextFunction) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (err) {
        next(err); // Pass errors to Express error handler
    }
}) as RequestHandler);

// Get all tasks
router.get('/', (async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (err) {
        next(err);
    }
}) as RequestHandler);

// Get a single task by ID
router.get('/:id', (async (req: Request, res: Response, next: NextFunction) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.status(200).send(task);
    } catch (err) {
        next(err);
    }
}) as RequestHandler);

// Update a task by ID
router.patch('/:id', (async (req: Request, res: Response, next: NextFunction) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).send();
        }
        res.status(200).send(task);
    } catch (err) {
        next(err);
    }
}) as RequestHandler);

// Delete a task by ID
router.delete('/:id', (async (req: Request, res: Response, next: NextFunction) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.status(200).send(task);
    } catch (err) {
        next(err);
    }
}) as RequestHandler);

export default router;
