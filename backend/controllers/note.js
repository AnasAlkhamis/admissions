const connection = require("../models/db");

// =================================================== /
// This function creates new role
const createNote = async (req, res) => {
  try {
    const { note, user_id } = req.body;

    const query = `INSERT INTO notes (note, user_id) VALUE (?,?)`;

    const data = [note, user_id];
    const result = await connection.promise().query(query, data);
    if (result[0]) {
      return res.status(201).json({
        success: true,
        message: `Success note created`,
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

const getNotesByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const query = `SELECT * FROM notes WHERE user_id = ?`;
    const data = [id];
    const result = await connection.promise().query(query, data);
    if (result[0].length) {
      return res.status(200).json({
        success: true,
        message: `All notes for the userId ${id}`,
        result:result[0]
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      error,
    });
  }
};
module.exports = { createNote, getNotesByUserId };
