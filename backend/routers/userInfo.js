const express = require("express");

const userRouter = express.Router();
const { createInfo, getAllUsersInfo } = require("../controllers/userInfo");
const { authentication } = require("../middlewares/authentication");
// =========================================== //
//write your code here
userRouter.post("/", authentication, createInfo);
userRouter.get("/", authentication, getAllUsersInfo);

module.exports = userRouter;
