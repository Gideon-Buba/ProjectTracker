import { Schema, model, Document } from "mongoose";

interface IProject extends Document {
    name: string;
    description?: string;
    teams: Schema.Types.ObjectId[];
}

const projectSchema = new Schema<IProject>({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
});

const Project = model<IProject>("Project", projectSchema);
export { Project, IProject };
