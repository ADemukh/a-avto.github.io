/*eslint strict:0  */
var config, nodemailer;

config = require('../config');
nodemailer = require('nodemailer');

function sendEmail(to, subject, body) {
  var mailOptions, transporter;

  transporter = nodemailer.createTransport(config.nodemailer.options);
  mailOptions = {
    from: config.nodemailer.maailFrom,
    to: to,
    subject: subject,
    html: body
  };
  return transporter.sendMail(mailOptions)
    .then(function emailSent(result) {
			if (result && result.accepted && result.accepted.length) {
        return Promise.resolve('Письмо отправлено.');
      }
      return Promise.reject('Письмо не оправлено.');
		});
}

module.exports = {
  sendEmail: sendEmail
};