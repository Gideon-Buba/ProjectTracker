import { Schema, model, Document } from "mongoose";

interface ITask extends Document {
    projectName: string;
    assignee: string;
    taskName: string;
    description: string;
    resourceLink?: string;
    startDate: Date;
    endDate: Date;
    duration: number;
    status: string;
    progress: {
        week: number;
        percentageDone: number;
        updates: string;
    }[];
    changeHistory: {
        updatedAt: Date;
        previousData: Partial<ITask>;
    }[];
}

const taskSchema = new Schema<ITask>({
    projectName: { type: String, required: true },
    assignee: { type: String, required: true },
    taskName: { type: String, required: true },
    description: { type: String, required: true },
    resourceLink: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    duration: { type: Number, required: true },
    status: { type: String, required: true },
    progress: [
        {
            week: { type: Number, required: true },
            percentageDone: { type: Number, required: true },
            updates: { type: String, required: true },
        },
    ],
    changeHistory: [
        {
            updatedAt: { type: Date, default: Date.now },
            previousData: { type: Object, required: true },
        },
    ],
});

// Custom validator to calculate duration
taskSchema.pre('validate', function (next) {
    if (this.startDate && this.endDate) {
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);
        this.duration = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)); // Convert to days
    }
    next();
});


const Task = model<ITask>("Task", taskSchema);
export { Task, ITask };
