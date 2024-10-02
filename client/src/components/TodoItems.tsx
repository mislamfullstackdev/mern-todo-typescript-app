import React, { useState } from "react";
import axios from "axios";

interface Todo{
    _id: string;
    name: string;
    description: string;
    status: string;
}

interface TodoItemsProps{
    todos: Todo[];
    baseUrl: string;
    fetchTodos:()=> void; //callback to refresh todo after delete
}

const TodoItems: React.FC<TodoItemsProps> =({todos, baseUrl, fetchTodos})=>{
    const removeTodo =async (id: string) => {
        try {
            await axios.delete(`${baseUrl}/api/todos/${id}`);
            fetchTodos();
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return(
        <div className="w-full max-w-md mx-auto mt-6">
            <h2 className="text-xl font-bold mb-4">Todo List</h2>
            {todos.map((todo)=>(
                <div className="bg-gray-100 p-4 rounded-md shadow-md mb-2">
                    <h3 className="font-semibold">{todo.name}</h3>
                    <p className="text-gray-600">{todo.description}</p>
                    <button 
                        className="bg-red-500 tex-while py-1 px-3 rounded mt-2"
                        onClick={() => removeTodo(todo._id)}
                        >
                            Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TodoItems;