import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching todos', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm refreshTodos={fetchTodos} />
      {loading ? <p>Loading...</p> : <TodoList todos={todos} />}
    </div>
  );
}

export default App;

