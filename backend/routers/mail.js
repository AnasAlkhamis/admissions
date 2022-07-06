const express = require("express");
const {sendEmail} = require("../controllers/email");
const mailRouter = express.Router();
//dont press enter
//write your code here

mailRouter.post("/", sendEmail);

//write your code here
module.exports = mailRouter;
