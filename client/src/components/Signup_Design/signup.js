import React from 'react';
import './css/main.css';
import './css/util.css';
import Auth from '../Auth'
import GoogleLogin from "react-google-login";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
var gen_otp="123ab"//from db
var data;
const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    setTimeout(()=>{window.location.reload()},2000);
    return <div className="timer" style={{color:'red'}}><strong>OTP expired</strong></div>;
  }
  return (
    <div className="timer">
    <div className="text">Remaining</div>
    <div className="value" style={{fontSize:'20px'}}>{remainingTime}</div>
    <div className="text">seconds</div>
    </div>
  );
};
const validate = (email) => {
  const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return expression.test(String(email).toLowerCase())
}
function sendOTP(){
  var element1=document.getElementById('name-div');
  element1.style.display='none';
  var element2=document.getElementById('email-div');
  element2.style.display='none';
  var element3=document.getElementById('btn-div');
  element3.style.display='none';
  var element4=document.getElementById('checkBox-div');
  element4.style.display='none';
  var element5=document.getElementById('googlebtn');
  element5.style.display='none';
  fetch('http://localhost:3001/api/signup',
  {
    method:'POST',
    headers:{
      'Content-Type': 'application/json;charset=utf-8'
    },
    body:JSON.stringify(data)
  })
  .then((res)=>res.json())
  .then((exists)=>{
    var x=document.getElementById('otp-div');
    x.style.display='block';
    var y=document.getElementById('otp-timer');
    y.style.display='block';
})
}
export class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email: '',
      otp: '',
      nameErr:'',
      emailErr:'',
      otpErr:'',
      termsErr:'',
      clickTracker:false
    };
  }
  myChangeHandler = (event) => {
    var nam = event.target.name;
    var val = event.target.value;
    this.setState({[nam]: val});
    if(nam=="name" && val=="")
    {
      let nameErr="Name is required";
      this.setState({nameErr});
      document.getElementById('supbtn').disabled=true;
    }
    else if(nam=="email" && !validate(val) && val!="")
    {
      let emailErr="Invalid Email";
      this.setState({emailErr});
      document.getElementById('supbtn').disabled=true;
      var x=document.getElementById('otp-div');
      x.style.display='none';
      var y=document.getElementById('otp-timer');
      y.style.display='none';
    }
    else if(nam=="email" && validate(val))
    {
      let email_data={
        email:val.toLowerCase()
      }
      fetch('http://localhost:3001/api/login/check',
      {
        method:'POST',
        headers:{
          'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify(email_data)
      })
      .then((res)=>res.json())
      .then((exists)=>{
        console.log(exists.alreadyExists);
        if(exists.alreadyExists)
        {
          let emailErr="Account already exists\nPlease Login";
          this.setState({emailErr});
          document.getElementById('supbtn').disabled=true;
        }
        else {
          let emailErr="";
          this.setState({emailErr});
          document.getElementById('supbtn').disabled=false;
        }
      });
    }
    else if(nam=="otp" && val.length>=4)// && val!=gen_otp)
    {
      data={
        email:document.getElementById('mail').value.toLowerCase(),
        verificationcode:val
      }
      fetch('http://localhost:3001/api/signup/verify',
      {
        method:'POST',
        headers:{
          'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify(data)
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data.isVerified);
        if(data.isVerified)
        {
            Auth.authenticate();
        window.location.href='#/dashboard';
        }
        else
        {
          let otpErr="Wrong OTP";
          this.setState({otpErr});
        }
      })
    }
    else {
      let nameErr="";
      this.setState({nameErr});
      let emailErr="";
      this.setState({emailErr});
      let otpErr="";
      this.setState({otpErr});
      document.getElementById('supbtn').disabled=false;
    }
  }
  checkbox_click(e){
    var checkbx=document.getElementById('ckb1').checked;
    if(checkbx)
    {
      document.getElementById('cbk1-error').style.display='none';
    }
    else {
      document.getElementById('cbk1-error').style.display='block';
    }
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    var mail=document.getElementById('mail').value;
    var nameval=document.getElementById('name').value;
    var checkbx=document.getElementById('ckb1').checked;
    if(mail!="" && nameval!="" && checkbx)
    {
      var signupbtn=document.getElementById('supbtn');
      signupbtn.disabled=true;
      const email=document.getElementById('mail').value.toLowerCase();
      const name=document.getElementById('name').value;
      data={
        email:email,
        name:name
      }
      let clickTracker=true;
      this.setState({clickTracker});
      sendOTP();
    }
    else if(checkbx==false)
    {
      document.getElementById('cbk1-error').style.display='block'
    }
    else {
      alert("Please enter valid details");
    }
  }
  signup(res) {
    const googleresponse = {
      name: res.profileObj.name,
      email: res.profileObj.email,
      Image: res.profileObj.imageUrl
    };
    //alert(googleresponse.name+"\n"+googleresponse.email);
    //debugger;
    let google_data={
      email:googleresponse.email,
      name:googleresponse.name
    }
    fetch('http://localhost:3001/api/googleSignup',
    {
      method:'POST',
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body:JSON.stringify(google_data)
    })
    .then((res)=>res.json())
    .then((exists)=>{
      console.log(exists.alreadyExists);
      if(exists.alreadyExists)
      {//alert("Account already exists\nPlease Register to Continue");
      window.location.href='./';
    }
    else {
      window.location.href="#/dashboard";
    }
  })
}
render(){
  const responseGoogle = (response) => {
    this.signup(response);
  }
  return (
    <html lang="en">
    <body >
    <div class="limiter">
    <div class="container-login100">
    <div class="login100-more"><div className="image1"/><div className="image1-util"/></div>
    <div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
    <div className="logo-wrapper"  style={{alignContent:'center',alignItems:'center',justifyContent:'center'}}><a href='#'><div className="logo" style={{alignSelf:'center'}}/></a></div>
    <form class="login100-form validate-form">
    <span class="login100-form-title p-b-59">
    Sign Up
    <hr/>
    <div id="googlebtn">
    <GoogleLogin
    clientId="689118196122-o7v1jkou1ef2omo3ls7k59rljar911g0.apps.googleusercontent.com"
    buttonText="Sign up with Google "
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={"single_host_origin"}
    />
    </div>
    </span>
    <div class="wrap-input100 validate-input" id="name-div" >
    <input class="input100" type="text" id="name" name="name" placeholder="Name...." onChange={this.myChangeHandler}/>
    {this.state.nameErr? <div className="alert alert-danger"><strong>{this.state.nameErr}</strong></div>:null}
    <span class="focus-input100"></span>
    </div>
    <div class="wrap-input100 validate-input"  id="email-div">
    <input class="input100" type="email" id="mail" name="email" placeholder="Email...." onChange={this.myChangeHandler}/>
    {this.state.emailErr? <div className="alert alert-danger"><strong>{this.state.emailErr}</strong></div>:null}
    <span class="focus-input100"></span>
    </div>
    <div class="wrap-input100 validate-input" data-validate = "Wrong OTP" id="otp-div">
    <input class="input100" type="Password" name="otp" placeholder="OTP...." onChange={this.myChangeHandler}/>
    {this.state.otpErr? <div className="alert alert-danger"><strong>{this.state.otpErr}</strong></div>:null}
    <span class="focus-input100"></span>
    </div>
    <div id="otp-timer">
    Please enter the OTP you received on your Email <label style={{color:'blue'}}>{this.state.email}</label>
    <div className="timer-wrapper">
    {this.state.clickTracker?
      <CountdownCircleTimer
      isPlaying
      size={105}
      strokeWidth={7}
      duration={120}
      colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
      onComplete={() => [false, 1000]}
      >
      {renderTime}
      </CountdownCircleTimer>:null}
      </div>
      </div>
      <div class="flex-m w-full p-b-33" id="checkBox-div">
      <div class="contact100-form-checkbox">
      <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" onClick={this.checkbox_click}/>
      <label class="label-checkbox100" for="ckb1">
      <span class="txt1">
      I agree to the&nbsp;
      <a href="#" id="terms-checkbox" class="txt2 hov1">
      Terms of User
      </a>
      </span>
      </label>
      <div id="cbk1-error" className="alert alert-danger">Please agree to the terms</div>
      </div>
      </div>
      <div class="container-login100-form-btn" id="btn-div">
      <div class="wrap-login100-form-btn">
      <div class="login100-form-bgbtn"></div>
      <button class="login100-form-btn" id="supbtn" onClick={this.handleSubmit}>
      Sign Up
      </button>
      </div>
      <a href="./" class="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
      Sign in
      <i class="fa fa-long-arrow-right m-l-5"></i>
      </a>
      </div>
      </form>
      </div>
      </div>
      </div>
      </body>
      </html>
    );
  }
}
export default Signup;
