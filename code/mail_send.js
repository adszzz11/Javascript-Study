const nodemailer = require("nodemailer");

const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "709ab4939ca408",
    pass: "32fc7c3edcf5a9",
  },
};

//let transporter =
const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.responce;
    }
  });
};

let email_data = {
  from: "leetangle.offical@gmail.com",
  to: "adszzz11@gmail.com",
  subject: "This is test.",
  text: "This is Test!",
};

send(email_data);
