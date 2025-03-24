import { Schema, model, Document, Types } from "mongoose";

interface IProject extends Document {
    name: string;
    description: string;
    teams: Types.ObjectId[]; // References to teams
}

const projectSchema = new Schema<IProject>({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    teams: [{ type: Schema.Types.ObjectId, ref: "Team" }] // Array of team references
});

const Project = model<IProject>("Project", projectSchema);
export { Project, IProject };
