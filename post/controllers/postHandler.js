const Post  = require("../models/post");

exports.postHandler = async(req,res) =>{
    try{
        const {title,desc} = req.body;
        const response = await Post.create({
            title,
            desc,
        })
        return res.status(200).json({
            sucess  :true,
            message  : "Post created Sucessfully !!",
            response,
        })
    }
    catch(err){
        res.status(500).json({
            sucess  :false,
            message  : "internal server issue (postHandler)"
        })
    }
}
