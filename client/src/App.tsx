import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Todo } from './types/Todo';
import './App.css';
import { error } from 'console';

const App: React.FC = () =>
{
  const [ todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState({name: '', description: ''});

  useEffect(()=> {
    fetchTodos();
  }, []);
  const base_url = 'http://localhost:5000';
  const fetchTodos = async () => {
    await axios.get(`${base_url}/api/todos`)
    .then(response => setTodos(response.data))
    .catch(error => console.error(error));
  }

  const addTodo = async () => {
    await axios.post(`${base_url}/api/todos`, { ...newTodo, status: 'pending'})
  }

  const markDone = async (id: string) => {
    await axios.put(`${base_url}/api/todos/${id}`, {status: 'done'});
    fetchTodos();
  }

  return (
    <div>
        <h1> Todo App </h1>
        <input 
          type='text'
          placeholder='Name'
          value={newTodo.name}
          onChange={e=>setNewTodo({ ...newTodo, name: e.target.value })}
        />
        <input 
          type='text'
          placeholder='description'
          value={newTodo.description}
          onChange={e=>setNewTodo({ ...newTodo, description: e.target.value })}
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map(todo=>(
            <li key={todo._id}>
              {todo.name} - {todo.description}
              <button onClick={() => markDone(todo._id)}>Mark as Done</button>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
