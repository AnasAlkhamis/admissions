const express = require("express");

const noteRouter = express.Router();
const { createNote, getNotesByUserId } = require("../controllers/note");
const { authentication } = require("../middlewares/authentication");
// =========================================== //
//write your code here
noteRouter.post("/", authentication, createNote);
noteRouter.get("/:id", authentication, getNotesByUserId);

module.exports = noteRouter;
