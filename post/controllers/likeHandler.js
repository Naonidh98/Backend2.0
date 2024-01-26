const Like = require("../models/like");
const Post = require("../models/post");

exports.likeHandler = async (req, res) => {
  try {
    const { name, post_id } = req.body;
    const likeresponse = await Like.create({
      name,
      post_id,
    });
    const response = await Post.findByIdAndUpdate(
      post_id,
      {
        $push: { likes: likeresponse._id },
      },
      { new: true }
    )
      .populate("likes")
      .exec();

    if (!response) {
      return res.status(401).jason({
        sucess: false,
        message: `${post_id} not present`,
      });
    }

    return res.status(200).json({
      sucess: true,
      message: "liked sucessfull",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "internal server issue (likeHandler)",
    });
  }
};
exports.unlikeHandler = async (req, res) => {
  try {
    const {post_id,id} = req.body;

    const response = await Post.findByIdAndUpdate(
      post_id,
      {
        $pull: { likes:id },
      },
      { new: true }
    );

    if (!response) {
      return res.status(401).jason({
        sucess: false,
        message: `${post_id} not present`,
      });
    }

    return res.status(200).json({
      sucess: true,
      message: "unliked sucessfull",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "internal server issue (unlikeHandler)",
    });
  }
};
