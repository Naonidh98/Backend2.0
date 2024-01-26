const Todo = require("../models/todo");

exports.updateTodoById = async (req, res) => {
  try {
    const { title, description } = req.body;

    const id = req.params.id;

    const response = await Todo.findByIdAndUpdate(
      id,
      {
        title,
        description,
        updatedAt: Date.now(),
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      sucess: true,
      message: "Todo updated sucessfully!!",
      response,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      error: err.message,
      message: "Internal server issue (updateTodo)",
    });
  }
};
exports.deleteTodoById = async (req, res) => {
  try {
    const id = req.params.id;

    const response = await Todo.findByIdAndDelete(id);

    return res.status(200).json({
      sucess: true,
      message: `Todo : ${id} deleted sucessfully!!`,
      response,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      error: err.message,
      message: "Internal server issue (deleteTodo)",
    });
  }
};
