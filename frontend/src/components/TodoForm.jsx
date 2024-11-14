import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ refreshTodos }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/todos', { title });
      setTitle('');
      refreshTodos();
    } catch (error) {
      console.error('Error adding todo', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
