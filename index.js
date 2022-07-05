require("dotenv").config();
const path = require("path");

// const PORT = process.env.PORT || 3001;
// const port = process.env.PORT || 5000;

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
const port = 5000;




app.use(cors());
app.use(express.json());
app.use("/", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// app.listen(5000, () => console.log("Server Running"));
// app.listen(port, () => console.log("Server Running"));
app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})

// const oAuth2Client = new OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   "https://developers.google.com/oauthplayground"
// );

// oAuth2Client.setCredentials({
//   refresh_token: process.env.REFRESH_TOKEN,
// });

// ------------------

let transporter = nodemailer.createTransport({
  service: 'gmail',
  // host: 'smtp.gmail.com',
  // port: 465,
  // secure: true,
  // service: process.env.EMAIL_SERVICE,
  // host: process.env.EMAIL_SERVICE,
  port: 465,
  secure: true, // true for 465, false for other ports
  logger: true,
  debug: true,
  secureConnection: false,
  ignoreTLS: true, // add this 
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.PASS,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  let mailOptions = {
    from: name,
    to: process.env.EMAIL,
    subject: "Portfolio Contact Form Submission",
    html: `<p> Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
