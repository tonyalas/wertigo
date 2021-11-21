import express from "express";
import cors from "cors";
import { createTransport } from "nodemailer";
import multiparty from "multiparty";
import { urlencoded } from 'body-parser';
require("dotenv").config();

// instantiate an express app
const app = express()

app.use(urlencoded({extended: true}))

// cors
app.use(cors({ origin: "*" }));

// make the contact page the first page on the app
//app.route("/").get(function (req, res) {
//    res.sendFile(process.cwd() + "/index.html");
//});

app.post('/contactus', (req, res) => {
    //instantiate the SMTP server
    const smtpTrans = createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL,
            pass: process.env.PASSWORD,
        }
    })

    //specify what the email will look like
    const mailOpts = {
        from: 'alastony99@gmail.com',
        to: process.env.GMAIL,
        subject: 'New business inquiry email',
        text: `${req.body.name} (${req.body.email}) says ${req.body.businessName}`
    }

    // attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
        if(error) {
            console.log(error)
        }
        else {
            console.log("success!")
        }
    })
})