const express = require("express");
const router = express.Router();

const {postHandler} = require("../controllers/postHandler")
const {likeHandler,unlikeHandler} = require("../controllers/likeHandler")
const {commentHandler} = require("../controllers/commentHandler")

router.get("/test", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "Welcome to Test route",
  });
});

router.post("/post",postHandler);
router.post("/like",likeHandler);
router.delete("/unlike",unlikeHandler);
router.post("/comment",commentHandler);

module.exports = router;
