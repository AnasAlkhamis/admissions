const nodemailer = require("nodemailer");
// const hbs = require("nodemailer-express-handlebars");
const sendEmail = async (req, res) => {
  try {
    let code = Math.floor(Math.random() * 1000000);
    code = code.toString();
    // let code = 0000
    const { email } = req.body;
    const senderAuth = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chopa1939@gmail.com",
        pass: "f q m y a m c n q a r g o o b x",
      },
    });
    // senderAuth.use(
    //   "compile",
    //   hbs({
    //     viewEngine: "express-handlebars",
    //     viewPath: "views",
    //   })
    // );
    const options = {
      from: "chopa1939@gmail.com",
      to: email,
      html: `<html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          .container {
            width: 50%;
            background-color: rgb(31, 109, 203);
            color: wheat;
            height: 400px;
            margin: 0 auto;
          }
          .container div {
            text-align: center;
          }
          .code {
            width: 100px;
            background-color: red;
            text-align: center;
            padding: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHm9Ijcc90W_GLKh9Vypku7R-cQAAZBiGpAw&usqp=CAU"
            />
          </div>
          <div>
            <small>Hi</small>
            <p>Here is the confirmation code</p>
            <span class="code"> ${code} </span>
            <p>
              All you have to do is copy the confirmation code and paste it to your
              form to complete the email verification process.
            </p>
          </div>
        </div>
      </body>
    </html>
    `,
      text: code,
    };

    const result = await senderAuth.sendMail(options);
    if (result) {
      return res.status(200).json({
        success: true,
        message: `code sended to the email: ${email}`,
        code: code,
      });
    }
  } catch (error) {
    res.status(409).json({
      success: false,
      message: "server Error",
      error,
    });
  }
};
module.exports = { sendEmail };
