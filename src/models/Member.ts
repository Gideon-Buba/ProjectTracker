import {model, Schema, Types} from "mongoose";

interface IMember extends Document {
    name: string;
    role: string;
    team: Types.ObjectId; // Reference to Team
    tasks: Types.ObjectId[]; // References to Tasks
}

const memberSchema = new Schema<IMember>({
    name: { type: String, required: true },
    role: { type: String, required: true },
    team: { type: Schema.Types.ObjectId, ref: "Team", required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }]
});

const Member = model<IMember>("Member", memberSchema);
export { Member, IMember };
