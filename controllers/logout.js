let express     =require('express'),
bodyParser      =require('body-parser'),
mongoose        =require('mongoose'),
UserDetails     =require('./../models/userDetails'),
app             =express();
require('dotenv').config();

var data_client;
var data;
module.exports= {
  action :(req,res) =>{
    data_client=req.body;
    UserDetails.findOne({ email: req.body.email })
    .then((result) => {
      UserDetails.updateOne({ 'email': req.body.email },
      { $set: { verification: { isVerified:true, verificationCode:otp },loginCheck:false } },
      function(err,res){
        if(err)
        console.log(err);
        else {
          console.log("successfully updated");
        }
      })
    })
  }
};
