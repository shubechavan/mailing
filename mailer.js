// Import the nodemailer package
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services such as Outlook, Yahoo, etc.
  auth: {
    user: 'your-email@gmail.com', // Your Gmail address
    pass: 'your-password' // Your Gmail password or app-specific password
  }
});

// Define the email options
const mailOptions = {
  from: 'your-email@gmail.com', // Sender address
  to: 'recipient-email@example.com', // List of recipients
  subject: 'Hello from Nodemailer', // Subject line
  text: 'This is a test email sent using Nodemailer!', // Plain text body
  html: '<b>This is a test email sent using Nodemailer!</b>' // HTML body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
