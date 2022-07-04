const express = require("express");

const roleRouter = express.Router();
const {
  createNewRole,
  createNewPermission,
  createNewRole_permission,
} = require("../controllers/roles");
// =========================================== //
//write your code here
roleRouter.post("/", createNewRole);
roleRouter.post("/permissions", createNewPermission);
roleRouter.post("/role_permission", createNewRole_permission);

module.exports = roleRouter;
