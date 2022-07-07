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
const userRouter = require("./routers/userInfo");
const noteRouter = require("./routers/note");

// add endpoint to the routers
app.use("/roles", roleRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/email", mailRouter);
app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.listen(PORT, () => {
  console.log("Server working on PORT " + PORT);
});
