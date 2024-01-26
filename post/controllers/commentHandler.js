const Comment = require("../models/comment");
const Post = require("../models/post");

exports.commentHandler = async (req, res) => {
  try {
    const { name, desc, post_id } = req.body;
    const commentresponse = await Comment.create({
      name,
      desc,
      post_id,
    });
    const response = await Post.findByIdAndUpdate(
      post_id,
      {
        $push: { comments: commentresponse._id },
      },
      { new: true }
    )
      .populate("comments")
      .exec();

    if (!response) {
      return res.status(401).jason({
        sucess: false,
        message: `${post_id} not present`,
      });
    }

    return res.status(200).json({
      sucess: true,
      message: "comment sucessfull",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      error: err.message,
      message: "internal server issue (commentHandler)",
    });
  }
};
