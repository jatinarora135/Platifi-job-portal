let mongoose=require('mongoose');
var userOtpSchema =new mongoose.Schema({
    email:String,
    otp:String
});
module.exports=mongoose.model("otpCollections",userOtpSchema);
