import { Request, Response } from "express";
import Todo from '../models/todo';
import exp from "constants";

// get todos
export const getTodos = async (req: Request, res: Response) => {
    const todos = await Todo.find({ status: {$ne: 'done'}});
    res.json(todos);
}
//get a todo
export const getTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
}

// add todo
export const addTodo = async (req: Request, res: Response) => {
    const { name, description, status } = req.body;
    const newTodo = new Todo({
        name, description, status
    });
    await newTodo.save();
    res.status(201).json(newTodo);
}

//update todos
export const updateTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;
    await Todo.findByIdAndUpdate(id,{status});
    res.status(200).json({message: "status updated"});
}

// delete todo
export const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({message: 'Todo deleted'});
}
