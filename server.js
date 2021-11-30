const express = require("express");
//const cors = require("cors");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const bodyParser = require('body-parser')
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
        service: 'smtp.gmail.com',
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
            //expires: 1484314697598
        },
        tls:{
            rejectUnauthorized: true
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: process.env.GMAIL,
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: `Full name: ${req.body.name}\nEmail: ${req.body.email}\nPhone Number: ${req.body.phoneNumber}\nBusiness Name: ${req.body.businessName}\nBusiness Category: ${req.body.businessCategory}\nBusiness Subcategory: ${req.body.businessSubcategory}\nWebsite URL: ${req.body.websiteURL}\nInstagram Account: ${req.body.instagramName}\nOther URL: ${req.body.otherURL}\nAddress: ${req.body.address} ${req.body.city} ${req.body.zipcode}\nMessage: ${req.body.message}`
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

/*  How it was before the changes
app.use(bodyParser.urlencoded({extended: true}))

// cors
app.use(cors({ origin: "*" }));

// make the contact page the first page on the app
//app.route("/").get(function (req, res) {
//    res.sendFile(process.cwd() + "/index.html");
//});



app.post('/contactus', (req, res) => {
    //instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
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
}) */