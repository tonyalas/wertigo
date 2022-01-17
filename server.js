// This is the new alternative to the "serverOLD.js" file. 
// This new server file still does the same things as the old file but uses multer instead of only body-parser to get the form info and send the email.
// This method is also different because it does require the additional "app.js" file that was required before.
// ! If something goes wrong with image uploading, change the <script> tag in contactus.html to link to app.json, comment out the button in the html
// ! AND inside of package.json, change the start key to "node serverOLD.js". That is all that should be necessary to revert back to how it was before.

const businesses = require('./src/businessesData')

const express = require('express')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const fs = require('fs')
const multer = require('multer')
const cors = require('cors')

require('dotenv').config();

const app = express()

var allowlist = ['http://localhost:3000']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
app.use(cors(corsOptionsDelegate))

const PORT = process.env.PORT || 3001;

// COMMENT OUT THIS CODE BLOCK TO WORK LOCALLY. UNCOMMENT IT WHEN PUSHING TO PROD (HEROKU)
/*
app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
        res.redirect(`https://${req.header('host')}${req.url}`)
    } else {
        next();
    }
});
*/

// Middleware
app.use(express.static('build'))
app.use('/images', express.static('images'));
app.use('/public/businessPages', express.static('public/businessPages'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

var to;
var subject;
var body;
var path;
var name;
var email;
var phoneNumber;
var privacyCheck;
var businessName;
var businessCategory;
var businessSubcategory;
var websiteURL;
var instagramName;
var otherURL;
var address;
var city;
var postalCode;
var message;

var customerName;
var customerbusinessName;
var customerEmail;
var customerMessage;

// this allows multer to save the uploaded image "locally" and then upload it to get a path and then send it via Nodemailer
var Storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
  }
});

var upload = multer({
  storage: Storage
}).single('logoImage'); //Field name and max count

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html ')
})

app.get('/api/v1/businesses', (req, res) => {
  res.send(businesses)
})

app.post('/', (req, res) => {
  console.log(req.body)

  upload(req, res, function (err) {
    if (err) {
      console.log(err)
      return res.end('Something went wrong!');
    } else {
      to = process.env.GMAIL
      subject = 'Wertigo Contact Form'
      name = req.body.name
      email = req.body.email
      phoneNumber = req.body.phoneNumber
      privacyCheck = req.body.privacyCheck
      businessName = req.body.businessName
      businessCategory = req.body.businessCategory
      businessSubcategory = req.body.businessSubcategory
      websiteURL = req.body.websiteURL
      instagramName = req.body.instagramName
      otherURL = req.body.otherURL
      address = req.body.address
      city = req.body.city
      postalCode = req.body.postalCode
      message = req.body.message
      // ONLY IF there is a file uploaded, create the path variable to be used in Nodemailer
      if (req.file !== undefined) {
        path = req.file.path
      }
      customerName = req.body.customerName
      customerbusinessName = req.body.customerbusinessName
      customerEmail = req.body.customerEmail
      customerMessage = req.body.customerEmail

      console.log(to)
      console.log(subject)
      console.log(name)
      console.log(email)
      console.log(phoneNumber)
      console.log(privacyCheck)
      console.log(businessName)
      //console.log(body)
      console.log(req.file)
      //console.log(req.files)

      var transporter = nodemailer.createTransport({
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
      });

      const mailOptions = {
        from: email,
        to: process.env.GMAIL,
        subject: subject,
        html: `<b>Business Owner Info</b><br><b>Full name:</b> ${req.body.name}<br><b>Email:</b> ${req.body.email}<br><b>Phone Number:</b> ${req.body.phoneNumber}<br><b>Wants to Share Private Info:</b> ${req.body.privacyCheck}<br><b>Business Name:</b> ${req.body.businessName}<br><b>Business Category:</b> ${req.body.businessCategory}<br><b>Business Subcategory:</b> ${req.body.businessSubcategory}<br><b>Website URL:</b> ${req.body.websiteURL}<br><b>Instagram Account:</b> ${req.body.instagramName}<br><b>Other URL:</b> ${req.body.otherURL}<br><b>Address:</b> ${req.body.address} ${req.body.city} ${req.body.postalCode}<br><b>Message:</b> ${req.body.message}<br><br><b>User Recommendation Info</b><br><b>Full Name:</b> ${req.body.customerName}<br><b>Email:</b> ${req.body.customerEmail}<br><b>Business Recommendation:</b> ${req.body.customerbusinessName}<br><b>Message:</b> ${req.body.customerMessage}`,
        attachments: [
          {
            // the way it is right now, if someone sends (uploads) an image and then the next person goes to send a contact form but does NOT include an image, it will send the last image anyway. 
            path: path
          }
        ]
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          return res.redirect('/contactformFailure.html')
        }
        else {
          console.log('Email sent: ' + info.response);
          // on a successful email, redirect the user to a success screen since it won't let me do the javascript alert message.
          return res.redirect('/contactformsuccessfullysubmitted.html')
          // this code is technically unreachable since the page will return a different page before it ever gets to this 
          // the code below will delete the image that was just created in the "local system". It is commented out because it causes the user-Recommendation form to break. Heroku automatically clears any locally saved images/files every 24 hours anyway. (or I can manually restart all dynos to wipe the local storage)
          // eslint-disable-next-line no-unreachable
          if (req.file !== undefined) {
            fs.unlink(path, function (err) {
              if (err) {
                return res.end(err)
              } else {
                console.log('deleted')
              }
            })
          }
          // can also put the return line: 'return res.redirect('/contactformsuccessfullysubmitted.html')' here
        }
      });
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})