import { Schema, model, Document } from "mongoose";

interface ITeam extends Document {
    name: string;
    project: Schema.Types.ObjectId;
    description?: string;
    members: Schema.Types.ObjectId[];
}

const teamSchema = new Schema<ITeam>({
    name: { type: String, required: true },
    project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    description: { type: String },
    members: [{ type: Schema.Types.ObjectId, ref: "Member" }],
});

const Team = model<ITeam>("Team", teamSchema);
export { Team, ITeam };

