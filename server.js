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
// Having this section of code first will allow the backend to automatically redirect any http connections to https
// previously, this section below was not included and the three app.use lines below were here instead.


// COMMENT OUT THIS CODE BLOCK TO WORK LOCALLY. UNCOMMENT IT WHEN PUSHING TO PROD (HEROKU)

app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
        res.redirect(`https://${req.header('host')}${req.url}`)
    } else {
        next();
    }
});


// Use these lines to load/serve the static HTML pages
app.use(express.static('public'))
app.use('/images', express.static('images'));
app.use('/public/businessPages', express.static('public/businessPages'));
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
        html: `<b>Business Owner Info</b><br><b>Full name:</b> ${req.body.name}<br><b>Email:</b> ${req.body.email}<br><b>Phone Number:</b> ${req.body.phoneNumber}<br><b>Wants to Share Private Info:</b> ${req.body.privacyCheck}<br><b>Business Name:</b> ${req.body.businessName}<br><b>Business Category:</b> ${req.body.businessCategory}<br><b>Business Subcategory:</b> ${req.body.businessSubcategory}<br><b>Website URL:</b> ${req.body.websiteURL}<br><b>Instagram Account:</b> ${req.body.instagramName}<br><b>Other URL:</b> ${req.body.otherURL}<br><b>Address:</b> ${req.body.address} ${req.body.city} ${req.body.postalCode}<br><b>Message:</b> ${req.body.message}<br><br><b>User Recommendation Info</b><br><b>Full Name:</b> ${req.body.customerName}<br><b>Email:</b> ${req.body.customerEmail}<br><b>Business Recommendation:</b> ${req.body.customerbusinessName}<br><b>Message:</b> ${req.body.customerMessage}`
        //`Business Owner Info\nFull name: ${req.body.name}\nEmail: ${req.body.email}\nPhone Number: ${req.body.phoneNumber}\nWants to Share Private Info: ${req.body.privacyCheck}\nBusiness Name: ${req.body.businessName}\nBusiness Category: ${req.body.businessCategory}\nBusiness Subcategory: ${req.body.businessSubcategory}\nWebsite URL: ${req.body.websiteURL}\nInstagram Account: ${req.body.instagramName}\nOther URL: ${req.body.otherURL}\nAddress: ${req.body.address} ${req.body.city} ${req.body.postalCode}\nMessage: ${req.body.message}\n\nUser Recommendation Info\nFull Name: ${req.body.customerName}\nEmail: ${req.body.customerEmail}\nBusiness Recommendation: ${req.body.customerbusinessName}\nMessage: ${req.body.customerMessage}`
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