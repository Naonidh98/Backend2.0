const Todo = require("../models/todo");

exports.createTodo = async(req,res)=>{
    try{
       const {title,description,uploadAt,updatedAt} = req.body;

       const todo = new Todo({
        title,description,uploadAt,updatedAt
       }) 

       const response = await todo.save();
       
       return res.status(200).json({
        sucess : true,
        message  : "Todo created sucessfully!!",
        response,
       })

    }
    catch(err){
        res.status(500).json({
            sucess : false,
            error : err.message,
            message : "Internal server issue (createTodo)"
        })
    }
}