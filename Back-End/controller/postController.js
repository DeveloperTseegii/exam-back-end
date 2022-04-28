const express = require("express");
const Posts = require("../models/posts_info");
const { validationResult } = require("express-validator");
const getPost = (req, res, next) => {
  Posts.find({}, function (err, data) {
    if (err)
      req.json({
        success: false,
        data: err,
      });
    else
      res.json({
        success: true,
        data: data,
      });
  });
};

const create = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  } else {
    const data = req.body;
    Posts.create(data, function (err, data) {
      if (err)
        res.json({
          success: false,
          data: err,
        });
      else
        res.json({
          success: true,
          data: data,
        });
    });
  }
};

const deletePost = (req, res, next) => {
  Posts.findOneAndDelete({
    _id: req.params.id,
  })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

module.exports = {
  getPost,
  create,
  deletePost,
};
