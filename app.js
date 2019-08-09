var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 465,
  auth: {
    user: 'nordberg5780@gmail.com',
    pass: 'zoepzdhomrdhtgab'
  },
  tls: {
    rejectUnauthorized: false
  }
});

let HelperOptions = {
  from: '"Me" <nordberg5780@gmail.com',
  to: 'nordberg5780@gmail.com',
  subject: 'testeststse',
  text: 'testeests'
};



  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
  });
