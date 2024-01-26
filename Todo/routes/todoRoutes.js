const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getAllTodos, getTodoById } = require("../controllers/getTodo");
const { updateTodoById, deleteTodoById } = require("../controllers/updateTodo");

router.get("/test", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "Welcome to Test route",
  });
});

router.post("/create", createTodo);
router.post("/update/:id", updateTodoById);
router.delete("/delete/:id", deleteTodoById);
router.get("/get/all", getAllTodos);
router.get("/get/:id", getTodoById);

module.exports = router;
