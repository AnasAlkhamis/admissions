const connection = require("../models/db");

// =================================================== /
// This function creates new role
const createInfo = async (req, res) => {
  try {
    const userId = req.token.userId;
    const {
      fullName,
      phoneNumber,
      Educational,
      birthday,
      about,
      img,
      nationality,
      righTimes,
      address,
      scientificSpecialization,
      hearAUs,
      knowAboutUs,
    } = req.body;
    const query = `INSERT INTO usersInfo (fullName,phoneNumber,Educational,birthday,about,img,nationality,righTimes,address,scientificSpecialization,hearAUs,knowAboutUs,user_id) VALUE (?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    const data = [
      fullName,
      phoneNumber,
      Educational,
      birthday,
      about,
      img,
      nationality,
      righTimes,
      address,
      scientificSpecialization,
      hearAUs,
      knowAboutUs,
      userId,
    ];
    const result = await connection.promise().query(query, data);
    if (result[0]) {
      return res.status(201).json({
        success: true,
        message: `Success user info created`,
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

module.exports = { createInfo };
