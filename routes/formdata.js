const express = require('express');
const nodemailer = require('../src/nodemailer/nodemailer');
const router = express.Router();

router.post('/', function (req, res, next) {
  const submission = req.body;

  res.sendStatus(200);

  const transporter = nodemailer.transporter.getInstance();
  transporter.sendMail({
    from: `"${submission.name}" <${submission.email}>`,
    to: "cass@cassm.net",
    subject: 'Contact form submission from cassm.net',
    text: submission.message
  }).then(info => console.log(info));

  if (submission.sendcopy) {
    transporter.sendMail({
      from: '"Cassandra May" <cass@cassm.net>',
      to: submission.email,
      subject: 'Your cassm.net contact form submission',
      text: `Hi ${submission.name},

      Thanks for getting in contact! I'll get back to you shortly.

      -Cass

      ------------------------------------------------

      ${submission.message}`
    }).then(info => console.log(info));
  }
});

module.exports = router;
