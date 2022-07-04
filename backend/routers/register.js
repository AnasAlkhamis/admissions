const express = require("express");
const { register, updateUserById } = require("../controllers/register");
const registerRouter = express.Router();
const { authentication } = require("../middlewares/authentication");

// -------------------------
registerRouter.post("/", register);
registerRouter.put("/", authentication, updateUserById);

// -------------------------

module.exports = registerRouter;
