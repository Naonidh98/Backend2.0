const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        maxLength : 30,
    },
    description : {
        type : String,
        required : true,
        maxLength : 100,
    },
    uploadAt : {
        type : Date,
        required : true,
        default:Date.now()
    },
    updatedAt : {
        type : Date,
        required : true,
        default:Date.now()
    },
})

module.exports = mongoose.model("Todo",todoSchema);
