import express from "express";
import {
    addTodo,
  deleteTodo,
  getAllTodo,
  getTodoById,
} from "../controllers/todos.controllers.js";

const router = express.Router();

router.post("/todo", addTodo);
router.get("/todos", getAllTodo);
router.get("/todo/:id", getTodoById);
router.delete("/todo/:yid", deleteTodo);

export default router;
