const express = require("express");
const router = express.Router();

const Todo = require("../models/todo");

// add todo
router.post("/addTodo", async (req, res) => {
  const data = {
    name: req.body.name,
    status: req.body.status,
  };
  const todoObj = new Todo(data);

  try {
    const todo = await todoObj.save();
    res.json({ status: 200, data: todo });
  } catch (error) {
    res.json({ message: "error found on adding todo" });
  }
});

// get all todos
router.get("/getTodos", async (req, res) => {

    try {
        const todos = await Todo.find();
        res.json({status:200,data:todos});
    } catch (error) {
        res.json({ message: "error found on getting todos" });
    }
});

// delete a todo
router.post("/deleteTodo", async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.body.id);
        res.json({status:200,data:todo});
    } catch (error) {
        res.json({ message: "error found on deleting todo" });
    }
})

// update a todo status
router.put("/updateTodo", async (req, res) => {
    const id = req.body.id;
    try {
        const todo = await Todo.findById(id);
        todo.status = req.body.status;
        const updatedTodo = await todo.save();
        res.json({status:200,data:updatedTodo});
    }catch (error) {
        res.json({ message: "error found on updating todo" });
    }
})

module.exports = router;
