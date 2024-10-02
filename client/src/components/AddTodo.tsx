import React, { useState } from "react";
import axios from "axios";

interface AddTodoProps{
    onTodoAdded: () => void;
    baseUrl: string
}
const AddTodo: React.FC<AddTodoProps> = ({onTodoAdded, baseUrl})=>{
    const [ newTodo, setNewTodo ] = useState({name: '', description: ''});
    const [ loading, setLoading ] = useState(false);

    const addTodo = async () => {
        if(loading) return;
        try {
           setLoading(true);
           await axios.post(`${baseUrl}/api/todos`, {...newTodo, status: 'pending'});
            // to refresh the todo list in the parent component
            onTodoAdded();
            //clear the input
            setNewTodo({name: '', description: ''});
        } catch (error) {
            console.error('Error adding todo:', error)
        }finally{
            setLoading(false)
        }
    };
    return(
        <div className="bg-white p-4 rounded-md shadow-md w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Add New Todo</h2>
            <input
                className="border rounded-md p-2 w-full mb-2"
                type="text"
                placeholder="Todo Name"
                value={newTodo.name}
                onChange={(e)=>setNewTodo({ ...newTodo, name: e.target.value })}
            />
            <input
                className="border rounded-md p-2 w-full mb-2"
                type="text"
                placeholder="Description"
                value={newTodo.description}
                onChange={(e)=>setNewTodo({ ...newTodo, description: e.target.value })}
            />
            <button
                className={`bg-blue-500 text-white py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={addTodo}
                disabled={loading}
            >
                {loading ? 'Adding Todo...': 'Add Todo'}
            </button>
        </div>
    );
}
export default AddTodo;