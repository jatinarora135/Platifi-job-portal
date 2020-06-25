let mongoose = require('mongoose');
var userDetailsSchema = new mongoose.Schema({
    email: String,
    verification: {
        isVerified:{
            type:Boolean,
            default:false
        },
        verificationCode:String
    },
        name: String,
        loginCheck:Boolean,
        type: String
});

module.exports = mongoose.model("userDetails", userDetailsSchema);
