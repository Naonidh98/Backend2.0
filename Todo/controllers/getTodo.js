const Todo = require("../models/todo");

exports.getAllTodos = async (req, res) => {
  try {
    const response = await Todo.find({});

    return res.status(200).json({
      sucess: true,
      message: "Todos fetched sucessfully!!",
      response,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      error: err.message,
      message: "Internal server issue (getAllTodos)",
    });
  }
};
exports.getTodoById = async (req, res) => {
    try {
      const id = req.params.id;
  
      const response = await Todo.findById( id );
  
      return res.status(200).json({
        sucess: true,
        message: `Todo : ${id} is fetched sucessfully!!`,
        response,
      });
    } catch (err) {
      res.status(500).json({
        sucess: false,
        error: err.message,
        message: "Internal server issue (getTodoById)",
      });
    }
  };
  