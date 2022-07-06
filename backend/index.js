const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;
require("./models/db");
// require express router
const roleRouter = require("./routers/roles");
const loginRouter = require("./routers/login");
const registerRouter = require("./routers/register");
const mailRouter = require("./routers/mail");


// add endpoint to the routers
app.use("/roles", roleRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/email", mailRouter);


app.listen(PORT, () => {
  console.log("Server working on PORT " + PORT);
});
