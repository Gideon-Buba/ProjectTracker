import {model, Schema, Types} from "mongoose";

interface ITask extends Document {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    duration?: number;
    status: string;
    member: Types.ObjectId; // Reference to Member
}

const taskSchema = new Schema<ITask>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    duration: { type: Number },
    status: { type: String, required: true, enum: ["Pending", "In Progress", "Completed"] },
    member: { type: Schema.Types.ObjectId, ref: "Member", required: true }
});

// Auto-calculate duration before saving
taskSchema.pre("validate", function (next) {
    if (this.startDate && this.endDate) {
        this.duration = Math.ceil((this.endDate.getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24));
    }
    next();
});

const Task = model<ITask>("Task", taskSchema);
export { Task, ITask };
