require("dotenv").config();

// const PORT = process.env.PORT || 3001;
const port = process.env.PORT || 5000;

// Loads required dependencies
const express = require("express");
const router = express.Router();

const cors = require("cors");
const nodemailer = require("nodemailer");
// const { google } = require('googleapis');
// const OAuth2 = google.auth.OAuth2;
const { OAuth2Client } = require("google-auth-library");
const OAuth2 = OAuth2Client;

// Sets up the server that runs on port 5000
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// app.listen(5000, () => console.log("Server Running"));
app.listen(port, () => console.log("Server Running"));

// const oAuth2Client = new OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   "https://developers.google.com/oauthplayground"
// );

// oAuth2Client.setCredentials({
//   refresh_token: process.env.REFRESH_TOKEN,
// });

// ------------------

// const sendEmail = async () => {
//   try {

//     const oAuth2Client = new OAuth2(
//       process.env.CLIENT_ID,
//       process.env.CLIENT_SECRET,
//       "https://developers.google.com/oauthplayground"
//     );
    
//     oAuth2Client.setCredentials({
//       refreshToken: process.env.REFRESH_TOKEN,
//     });

//     const accessToken = oAuth2Client.getAccessToken();

//     const smtpTransport = nodemailer.createTransport({
//       // host: "smtp.gmail.com",
//       // port: 465,
//       // secure: true,
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: process.env.EMAIL,
//         pass: process.env.PASS,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN,
//         // accessToken: accessToken,
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL,
//       to: "test@gmail.com",
//       subject: "Test",
//       generateTextFromHTML: true,
//       html: "<b>test</b>",
//     };

//    smtpTransport.sendMail(mailOptions, function(err, result) {
//       // error ? console.log(error) : console.log(response);
//       // if (err) {
//       // return smtpTransport.close();
//       // }
//       // res.send({result});
//       if (err) {
//         console.log(err)
//         } else {
//           console.log('Result:', result)
//           return smtpTransport.close();
//         }

//     });
//   } catch (err) {
//     res.status(400).send(err);
//     console.log(err);
//   }
// };

// const mailOptions = {
//   from: process.env.EMAIL,
//   to: "test@gmail.com",
//   subject: "Test",
//   generateTextFromHTML: true,
//   html: "<b>test</b>"
// }

// smtpTransport.sendMail(mailOptions, (error, response) => {
//   error ? console.log(error) : console.log(response);
//   transporter.close();
// });

// -----------------
// router.post("/contact", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message;
//   const mail = {
//     from: name,
//     to: process.env.EMAIL,
//     subject: "Contact Form Submission",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Message: ${message}</p>`,
//   };
//   transporter.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: "ERROR" });
//     } else {
//       res.json({ status: "Message Sent" });
//     }
//   });
// });

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.PASS,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN
  }
});

router.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;


let mailOptions = {
  from: name,
  to: process.env.EMAIL,
  subject: 'Portfolio Contact Form Submission',
  html:  `<p> Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>`
};

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }

// transporter.sendMail(mailOptions, function(err, data) {
//   if (err) {
//     console.log("Error " + err);
//   } else {
//     console.log("Email sent successfully");
//   }
});
});
