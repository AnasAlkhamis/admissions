const express = require("express");

const userRouter = express.Router();
const { createInfo } = require("../controllers/userInfo");
const {authentication} = require("../middlewares/authentication");
// =========================================== //
//write your code here
userRouter.post("/", authentication, createInfo);

module.exports = userRouter;
