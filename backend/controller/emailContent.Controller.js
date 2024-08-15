const nodemailer = require("nodemailer");
require("dotenv").config();

const emailContent = async (req, res) => {
  const { userEmail } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let message = {
    from: process.env.EMAIL, // sender address
    to: userEmail, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>",
  };

  await transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        note: "mail sent",
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};
module.exports = emailContent;
