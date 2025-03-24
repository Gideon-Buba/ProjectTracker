import {model, Schema, Types} from "mongoose";

interface ITeam extends Document {
    name: string;
    project: Types.ObjectId; // Reference to Project
    members: Types.ObjectId[]; // References to Members
}

const teamSchema = new Schema<ITeam>({
    name: { type: String, required: true },
    project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    members: [{ type: Schema.Types.ObjectId, ref: "Member" }]
});

const Team = model<ITeam>("Team", teamSchema);
export { Team, ITeam };
