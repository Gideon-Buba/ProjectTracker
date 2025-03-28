import { Schema, model, Document } from "mongoose";

interface IMember extends Document {
    name: string;
    role: string;
    team: Schema.Types.ObjectId;
    tasks: Schema.Types.ObjectId[];
}

const memberSchema = new Schema<IMember>({
    name: { type: String, required: true },
    role: { type: String, required: true },
    team: { type: Schema.Types.ObjectId, ref: "Team", required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
});

const Member = model<IMember>("Member", memberSchema);
export { Member, IMember };
