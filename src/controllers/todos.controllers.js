import mongoose from "mongoose";
import Todos from "../models/todos.models.js";

const addTodo = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).json({
      message: "title or description required",
    });
    return;
  }

  const todo = Todos.create({
    title,
    description,
  });
  res.status(201).json({
    message: "user added to database",
    todo,
  });
};

// get all todo
const getAllTodo = async (req, res) => {
  const todos = await Todos.find({});
  res.status(200).json({
    todos: todos,
  });
};

// get single todo
const getTodoById = async () => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "not a valid id" });
  }

  const todo = await Todos.findById(id);
  if (!todo) {
    res.status(400).json({
      message: "todo not found",
    });
    return;
  }

  res.status(200).json(todo);
};


// delete todo
const deleteTodo = async (req , res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({ error: "not a valid id" });
  }

  const todo = await Todos.findOneAndDelete({ _id : id })

  if(!todo) {
    return res.status(404).json({error: "no todo found"})
  }
  res.status(200).json({
    message: "todo deleted successfully",
    todo,
  })
}

export { addTodo , getAllTodo , getTodoById ,deleteTodo}