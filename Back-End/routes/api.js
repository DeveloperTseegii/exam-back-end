const express = require("express");
const router = express.Router();
const postController = require("../controller/postController");

//Endpoints

router.get("/posts", postController.getPost);
router.post("/addpost", postController.create);
router.delete("/delete/id/:id", postController.deletePost);

module.exports = router;
