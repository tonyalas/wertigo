const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();

// instantiate an express app
const app = express()

// make the contact page the first page on the app
app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/index.html");
});

// port wll be 5000 for testing
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
});

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD,
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Server is ready to take our messages");
    }
});

app.post("/send", (req, res) => {
    // accepts the form data submitted and parse it using multiparty
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
        console.log(fields);
        Object.keys(fields).forEach(function (property) {
            data[property] = fields[property].toString();
        });

        // 
        const mail = {
            from: data.name,
            to: process.env.GMAIL,
            subject: `business owner inquiry`,
            text: `${data.name}\n ${data.email}\n ${data.phoneNumber}\n ${data.businessName}`,
        };

        //
        transporter.sendMail(mail, (err, data) => {
            if(err) {
                console.log(err);
                res.status(500).send("Something went wrong.");
            }
            else {
                res.status(200).send("Email successfully sent to recipient!");
            }
        });
    });
});