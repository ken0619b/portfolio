const functions = require('firebase-functions');
const cors = require('cors'); //cors

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;

const adminContents = data => {
  return `you got an email

name:
${data.name}

email:
${data.email}

comment:
${data.contents}
`;
};

exports.sendMail = functions.https.onCall((data, context) => {
  cors(data, context, () => { //cors
    let adminMail = {
      from: gmailEmail,
      to: adminEmail,
      subject: "you got a comment",
      text: adminContents(data)
    };

    const mailTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailEmail,
        pass: gmailPassword
      }
    });

    mailTransport.sendMail(adminMail, (err, info) => {
      if (err) {
        return console.error(`admin send failed. ${err}`);
      }
      return console.log("admin and user success");
    });
  })
});
