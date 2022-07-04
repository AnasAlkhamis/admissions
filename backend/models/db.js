const { createConnection } = require("mysql2");

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "FormDatabase",
});
connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("connected as " + connection.threadId);
  }
});
module.exports = connection;
