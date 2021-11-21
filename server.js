const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const bodyParser = require('body-parser')
require("dotenv").config();

// instantiate an express app
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

// cors
app.use(cors({ origin: "*" }));

// make the contact page the first page on the app
//app.route("/").get(function (req, res) {
//    res.sendFile(process.cwd() + "/index.html");
//});

