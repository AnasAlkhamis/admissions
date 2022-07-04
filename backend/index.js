const express = require("express");
const app = express();
app.use(express.json());
const PORT = 5000;
require("./models/db");
app.listen(PORT, () => {
  console.log("Server working on PORT " + PORT);
});
