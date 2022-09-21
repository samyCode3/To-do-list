const express = require("express")
const Todo = require("../Todo/todo-controller")
const router = express()
router.post("/postTodo", Todo.postTodo);
router.get("/complete/:id", Todo.completTask);
router.get("/GetTodo", Todo.GetTodo);

module.exports = router;
