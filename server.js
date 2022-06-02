// Loads required dependencies
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Sets up the server that runs on port 5000
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
// app.listen(5000, () => console.log("Server Running"));

// Setup Nodemailer

const contactEmail = nodemailer.createTransport({
    host: "mail.tigertech.net",
    // port: 587,
    port: 465,
    // secure: false,
    secure: true,
    auth: {
      user: "juanita@breakthroughwebsite.com",
      pass: "********",
    },
  });

  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "juanita@breakthroughwebsite.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });