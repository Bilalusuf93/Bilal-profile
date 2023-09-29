var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    html: `<!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    
    <style>
    h1 {
    color: green;
    }
    </style>
    </head>
    <body>
    
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
    
    </body>
    </html>
    
    `,
    text: `<!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    
    <style>
    h1 {
    color: green;
    }
    </style>
    </head>
    <body>
    
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
    
    </body>
    </html>
    
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error)
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}