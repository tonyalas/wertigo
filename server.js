const express = require("express");
//const cors = require("cors");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const bodyParser = require('body-parser');
require("dotenv").config();

// instantiate an express app
const app = express()

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'))
app.use('/images', express.static('images'));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html ')
})

app.post('/', (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.GMAIL,
            //pass: process.env.GMAILPASSWORD,
            clientId: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET,
            refreshToken: process.env.REFRESHTOKEN,
            accessToken: process.env.ACCESSTOKEN,
            expires: 1484314697598
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: process.env.GMAIL,
        subject: `${req.body.subject}: message from (Owner) ${req.body.email} (User) ${req.body.customerEmail}`,
        text: `Business Owner Info\nFull name: ${req.body.name}\nEmail: ${req.body.email}\nPhone Number: ${req.body.phoneNumber}\nBusiness Name: ${req.body.businessName}\nBusiness Category: ${req.body.businessCategory}\nBusiness Subcategory: ${req.body.businessSubcategory}\nWebsite URL: ${req.body.websiteURL}\nInstagram Account: ${req.body.instagramName}\nOther URL: ${req.body.otherURL}\nAddress: ${req.body.address} ${req.body.city} ${req.body.postalCode}\nMessage: ${req.body.message}\n\nUser Recommendation Info\nFull Name: ${req.body.customerName}\nEmail: ${req.body.customerEmail}\nBusiness Recommendation: ${req.body.customerbusinessName}\nMessage: ${req.body.customerMessage}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response)
            res.send('success')
        }
    })
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})