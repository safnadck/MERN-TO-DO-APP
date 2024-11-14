const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

// POST /api/todos - Add a new todo
router.post('/api/todos', async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = new Todo({
      title,
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: 'Error creating todo', error });
  }
});

// GET /api/todos - Retrieve all todos
router.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error });
  }
});

module.exports = router;
