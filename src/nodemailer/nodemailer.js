const nodemailer = require('nodemailer');

let transporter;

const create = () => {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_LOGIN,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

const getInstance = () => {
  return transporter || create();
}

module.exports = {
  transporter: {
    getInstance,
  }
}