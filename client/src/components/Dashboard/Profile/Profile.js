import React, { Component } from "react";    
import './Profile.css'   


  
    
class Profile extends Component {    
   
    render() {    
    
            
    
        return (    
            <div class="testbox">
    <form>
      <div class="banner">
        <h1>Fill Your Information below</h1>
      </div>
      <br/>
      <fieldset>
        <legend>Personal Details</legend>
        <div class="columns">
          <div class="item">
            <label for="name"> Name <span>*</span></label>
            <input id="name" type="txt" name="name" required />
          </div>

          
          <div class="item">
      <p>Gender</p>
      <select id="gender">
      <option value="0" disabled selected>Select Gender</option>
      <option value="1" >Male</option>
      <option value="2">Female</option>
      
      </select>   
  


          </div>

          <div class="item">
            <label for="dob">Date of Birth<span>*</span></label>
            <input id="dob" type="date"   name="dob" required />
          </div>
          
          <div class="item">
            <label for="address">Address<span>*</span></label>
            <input id="address" type="txt"   name="address" required />
          </div>
          <div class="item">
            <label for="country">Country<span>*</span></label>
            <input id="country" type="txt"   name="country" required/>
          </div>
          <div class="item">
            <label for="city">City<span>*</span></label>
            <input id="city" type="txt"   name="city"  />
          </div>
          <div class="item">
            <label for="state">State<span>*</span></label>
            <input id="state" type="txt"   name="state" />
          </div>
          <div class="item">
            <label for="email">Email Address<span>*</span></label>
            <input id="email" type="txt"   name="email" />
          </div>
          <div class="item">
            <label for="phoneNumber">Phone<span>*</span></label>
            <input id="phoneNumber" type="tel"   name="phoneNumber" />
          </div>

          <div class="item">
            <label for="maritalStatus">Marital Status<span>*</span></label>
            <input id="maritalStatus" type="txt"   name="maritalStatus" />
          </div>
        </div>  
      </fieldset>
      <br/>


      <fieldset>
      <legend>Education</legend>
      <div class="columns">

      <div class="item">
      <label for="university">University/College <span>*</span></label>
      <input id="university" type="txt" name="university" />
      
      </div>

      <div class="item">
      <label for="passingYear">Passing year<span>*</span></label>
      <input id="passingYear" type="txt" name="passingYear" />
      
      </div>

      <div class="item">
      <label for="highestQualification">Highest Qualification <span>*</span></label>
      <input id="highestQualification" type="txt" name="highestQualification" />
      
      </div>

      <div class="item">
      <label for="course">Course<span>*</span></label>
      <input id="course" type="txt" name="course" />
      
      </div>

      <div class="item">
      <label for="specialization">Specialization <span>*</span></label>
      <input id="specialization" type="txt" name="specialization" />
      
      </div>

      <div class="item">
      <label for="courseType">Course Type <span>*</span></label>
      <input id="couseType" type="txt" name="courseType" />
      
      </div>

      
      <div class="item">
      <label for="skills"> Skills <span>*</span></label>
      <input id="skills" type="txt" name="skills" />
      
      </div>

      <div class="item">
      <label for="languages"> Languages <span>*</span></label>
      <input id="languages" type="txt" name="languages" />
      
      </div>

      <div >
            <label htmlFor="resume">Upload your resume</label>
            <input type="file" id="myFile" name="filename"></input>
            
      </div>

      </div>
      </fieldset>

      
      <hr class="new5"></hr>
        
      <div class="item">
      <p>Work Experience</p>
      <select name="experience" id="experience">
      
      <option value="1" >Fresher</option>
      <option value="2">Prior Work Experince</option>
      
      </select>
      </div> 

      <div class="item">
      <label for="totalWorkExperience">Total Work Experience in years <span>*</span></label>
      <input id="totalWorkExperience" type="txt" name="totalWorkExperience" />
      
      </div>

      <div class="item">
      <label for="currentCompany">Current company<span>*</span></label>
      <input id="currentCompany" type="txt" name="currentCompany" />
      
      </div>

      <div class="item">
      <label for="currentLocation">Current company location<span>*</span></label>
      <input id="currentLocation" type="txt" name="currentLocation" />
      
      </div>

      <div class="item">
      <label for="currentDesignation">Current Designation<span>*</span></label>
      <input id="currentDesignation" type="txt" name="currentDesignation" />
      
      </div>

                  
      <div class="item">
      <label for="annualSalary">Annual Salary<span>*</span></label>
      <input id="annualSalary" type="txt" name="annualSalary" />
      
      </div>    

      <div class="item">
      <label for="workingSince">Working Since<span>*</span></label>
      <input id="workingSince" type="date" name="workingSince" />
      
      </div>

      <div class="item">
      <label for="durationOfNoticePeriod">Duration Of Notice Period<span>*</span></label>
      <input id="durationOfNoticePeriod" type="txt" name="durationOfNoticePeriod" />
      
      </div>

      <div class="item">
      <label for="prefferedWorkLocation">Preferred Working Location<span>*</span></label>
      <input id="prefferedWorkLocation" type="txt" name="prefferedWorkLocation" />
      
      </div>

      <div class="item">
      <label for="desiredJobType">Desired Job Type<span>*</span></label>
      <input id="desiredJobType" type="txt" name="desiredJobType" />
      
      </div>

      <div class="item">
      <label for="industryRole">Industrial Role<span>*</span></label>
      <input id="industryRole" type="txt" name="industryRole" />
      
      </div>

      <div class="item">
      <label for="functionalArea">Functional Area<span>*</span></label>
      <input id="functionalArea" type="txt" name="functionalArea" />
      
      </div>





      <div class="btn-block">
      {/* <input type="button" value="upload"/> */}
      <button type="submit" href="/">Update</button>
      </div>
        
      


    </form>
    


    </div>   
    
    
        )

        

                        
    }  
    
      
}  





    
export default Profile;