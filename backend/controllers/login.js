const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../models/db");
// This function checks user login credentials
const login = async (req, res) => {
  try {
    const password = req.body.password;
    const email = req.body.email.toLowerCase();
    const query = `SELECT * FROM users WHERE email = ?`;
    const data = [email];
    let result = await connection.promise().query(query, data);
    result = result[0][0];

    if (!result) {
      return res.status(409).json({
        success: false,
        message: `The email not exists`,
      });
    } else if (result) {
      const valid = await bcrypt.compare(password, result.password);
      if (!valid) {
        return res.status(403).json({
          success: false,
          message: `The password you’ve entered is incorrect`,
        });
      } else {
        const payload = {
          userId: result.id,
          role: result.role_id,
        };
        console.log("here");

        const options = {
          expiresIn: "120m",
        };

        const token = await jwt.sign(payload, process.env.SECRET, options);
        if (token) {
          return res.status(200).json({
            success: true,
            message: `Valid login credentials`,
            token: token,
          });
        }
      }
    } else throw Error;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `server Error`,
      error,
    });
  }
};

module.exports = {
  login,
};
