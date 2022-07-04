const connection = require("../models/db");

// =================================================== /
// This function creates new role
const createNewRole = async (req, res) => {
  try {
    const { role } = req.body;
    const query = `INSERT INTO roles (role) VALUE (?)`;
    const data = [role];
    const result = await connection.promise().query(query, data);
    if (result[0]) {
      return res.status(201).json({
        success: true,
        message: `Success role created`,
        result: result[0],
      });
    } else throw Error;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      error,
    });
  }
};
//=================================================== /
// This function creates new Permission
const createNewPermission = async (req, res) => {
  try {
    const { permission } = req.body;
    const query = `INSERT INTO permissions (permission) VALUE (?)`;
    const data = [permission];
    const result = await connection.promise().query(query, data);
    if (result[0]) {
      return res.status(201).json({
        success: true,
        message: `Success permission created`,
        result: result[0],
      });
    } else throw Error;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      error,
    });
  }
};
//=================================================== // done
// This function creates new Permission
const createNewRole_permission = async (req, res) => {
  try {
    const { role_id, permission_id } = req.body;
    const query = `INSERT INTO role_permission (role_id,
        permission_id) VALUE (?,?)`;
    const data = [role_id, permission_id];
    const result = await connection.promise().query(query, data);
    if (result[0]) {
      return res.status(201).json({
        success: true,
        message: `Success role_permission created`,
        result: result[0],
      });
    } else throw Error;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      error,
    });
  }
};
module.exports = {
  createNewRole,
  createNewPermission,
  createNewRole_permission,
};
