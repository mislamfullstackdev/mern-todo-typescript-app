import React, { useState, useEffect} from 'react';
import axios from 'axios';
//import './index.css';

import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';

const baseUrl = 'http://localhost:5000';
interface Todo{
  _id: string;
  name: string;
  description: string;
  status: string;
}
const App: React.FC = () =>
{
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const fetchTodos = async () => {
    try {
      const response = await  axios.get(`${baseUrl}/api/todos`);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos', error);
    }
  };
  useEffect(()=>{
    fetchTodos();// fetch todos on component mount
  },[]);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
        <AddTodo onTodoAdded={fetchTodos} baseUrl={baseUrl} />
        <TodoItems todos={todos} baseUrl={baseUrl} fetchTodos={fetchTodos}/>
    </div>
  );
}

export default App;
