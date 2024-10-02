import { ITodo } from "../types/todo";
import { model, Schema } from "mongoose";

const todoSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: { 
            type: String, 
            required: true, 
            enum: ['pending', 'done'] 
        },
    }, {timestamps: true}
);

export default model<ITodo>("Todo", todoSchema);