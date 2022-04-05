const express = require('express');
const nodemailer = require('../src/nodemailer/nodemailer');
const router = express.Router();

router.post('/', function(req, res, next) {
  const submission = req.body;

  res.sendStatus(200);

  console.log(submission);
  const transporter = nodemailer.transporter.getInstance();
  transporter.sendMail({
    from: `"${submission.name}" <${submission.email}>`,
    to: "cass@cassm.net",
    subject: 'Contact form submission from cassm.net',
    text: submission.message
  }).then(info => console.log(info));
});

module.exports = router;
