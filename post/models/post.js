const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true,
        maxLength : 20,
    },
    desc : {
        type : String,
        require : true,
        maxLength : 100,
    },
    likes :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Like"
    }],
    comments :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment"
    }],
})

module.exports = mongoose.model("Post",postSchema);