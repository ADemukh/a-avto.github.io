/* eslint strict:0  */
let config,
    nodemailer;

config = require('../config');
nodemailer = require('nodemailer');

function sendEmail(to, subject, body) {
    let mailOptions,
        transporter;

    transporter = nodemailer.createTransport(config.nodemailer.options);
    mailOptions = {
        from: config.nodemailer.maailFrom,
        to,
        subject,
        html: body,
    };
    return transporter.sendMail(mailOptions)
        .then((result) => {
            if (result && result.accepted && result.accepted.length) {
                return Promise.resolve('Письмо отправлено.');
            }
            return Promise.reject('Письмо не оправлено.');
        });
}

module.exports = {
    sendEmail,
};
