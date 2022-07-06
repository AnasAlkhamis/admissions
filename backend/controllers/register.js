require("dotenv").config();
const bcrypt = require("bcrypt");
const connection = require("../models/db");

const SECRET = process.env.SALT;

// This function to register(new user) .
const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const role_id = 1;
    const hashingPass = await bcrypt.hash(password, 7);

    const query = `INSERT INTO users (firstName, lastName, email, password, role_id) VALUES (?,?,?,?,?)`;
    const data = [firstName, lastName, email, password, role_id];
    const result = await connection.promise().query(query, data);
    if (result[0]) {
      res.status(200).json({
        success: true,
        message: "Success user Added",
        result: result[0],
      });
    } else throw Error;
  } catch (error) {
    res.status(409).json({
      success: false,
      message: "server Error",
      error,
    });
  }
};

// This function to update user information by user id
const updateUserById = (req, res) => {
  const id = req.token.userId;
  const { user_name, email, image } = req.body;
  const query = `UPDATE users SET user_name =IF(${
    user_name != ""
  }, ?, user_name) , email = IF(${email != ""}, ?, email) , image = IF(${
    image != ""
  }, ?, image) WHERE id = ?;`;
  const data = [user_name, email, image, id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    }
    return res.status(202).json({
      success: true,
      message: `user with id ${id} updated successfully`,
      result: result,
    });
  });
};

module.exports = {
  register,
  updateUserById,
};
