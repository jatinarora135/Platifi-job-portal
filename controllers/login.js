let express         = require('express'),
    bodyParser      = require('body-parser'),
    randomString    = require('randomstring'),
    mongoose        = require('mongoose'),
    UserDetails     = require('./../models/userDetails'),
    nodemailer      = require('nodemailer'),
    app             = express(),
    sendMail        = require('./sendMail'),
    config          = require('./../config/config.js'),
    emailAuth       = require('../config/keys.js');
//  require('dotenv').config();
var data_client;
var data;
module.exports = {
  login: (req, res) => {
    const otp = randomString.generate({
      length: 4,
      charset: 'numeric'
    });
    data_client = req.body;
    var mailToBeSent;
    //UserDetails.findOne({ email: req.body.email }).then((result)=>{data_client.name=result.name;}).catch((error)=>{console.log(error);});

    UserDetails.findOne({ email: req.body.email })
      .then((result) => {
        if (result != undefined && result.verification.isVerified===true) {

          mailToBeSent = `
          <h1>Hi ${result.name}! </h1> \
              <h1>Welcome to</h1><br>    \
              <a href= ${config.platifiJobsURL} ><img src="${config.platifiJobsLogo}" alt='Platifi Jobs'></a> \
              <p>Thanks for registering to Platifi Jobs. <br>In order to successfully verify your email, enter this OTP:<br> \
              <h1> ${otp}</h1><br> \
              <b>Note:</b> This is a system generated e-mail, kindly do not reply<br>
              <b>Contact Us:</b> <a href="mailto:${config.contactEmail}">email</a>
          `;

          return true;
        }
        else {
          return false;
        }
      })
      .then(canUserLogin => {
        res.send(canUserLogin);
        if (canUserLogin === true) {
          sendMail(mailToBeSent,data_client)
            .then(() => {
              console.log(otp);
              console.log('email has been sent!');

              UserDetails.findOneAndUpdate({'email':req.body.email}, {$set : {verification:{isVerified:true , verificationCode:otp}}})
              .then(()=>{
                setTimeout(() => {
                  UserDetails.findOne({ 'email': req.body.email })
                    .then((foundUser) => {
                      console.log(foundUser);
                      foundUser.verification.verificationCode = null;
                    })
                    .catch(err => {
                      console.log(err);
                    })
                }, 120000);
              })
              .catch((err)=>{
                console.log('error related to DB')
                console.log(err);
              })
            })
            .catch(err => {
              console.log('error in sending mail');
              console.log(err);
            })
        }
        else{
          console.log("user can't login as not signed up correctly!");
        }
      })
      .catch(err => {
        console.log('error related to DB');
        console.log(err);
      });
  }
}
