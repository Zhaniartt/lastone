const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com", // replace with your SMTP host
  port: 587, // replace with your SMTP port
  auth: {
    user: "zhaniartt@gmail.com", // replace with your SMTP username
    pass: "355ac91aJANI944" // replace with your SMTP password
  }
});

module.exports = transport;
