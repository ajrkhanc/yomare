import Link from "next/link"
import Head from "next/head"

export default function GetJob(){

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/yomamultinational/wp-json/contact-form-7/v1/contact-forms/25/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                       window.location.href = "/thank-you-lp"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("your-name=" + event.target.name.value +
            "&email=" + event.target.email.value +
            "&mobileno=" + event.target.phone_number.value +
            "&alternateno=" + event.target.alternatephone_number.value +
            "&education=" + event.target.education.value +
            "&CollegeName=" + event.target.college_name.value +
            "&profilefor=" + event.target.profile_for.value +
            "&currentrole=" + event.target.current_role.value +
            "&AdhaarNumber=" + event.target.aadhar_no.value +
            "&Aadharfc=" + event.target.aadharfc.value +
            "&Aadharbc=" + event.target.aadharbc.value +
            "&years=" + event.target.years.value +
            "&months=" + event.target.months.value +
            "&lakhs=" + event.target.lakhs.value +
            "&thousand=" + event.target.in_housand.value +
            "&resume=" + event.target.resume.value +
            "&CurrentLocation=" + event.target.clocation.value)

    }

    return(
        <>
        <Head>
         <title>GET JOB - Yomamultinational</title>
         <meta name="description" content="1800 102 1345 yoma.info@byldgroup.com Home ABOUT US Who We Are Mission, Vision & Values Life at Yoma Solutions General Staffing Industrial Staffing Staff Augmentation Managed Services Shared Resource Program Apprenticeship Program (NAPS) Client Corner Client Testimonials Our Clientele Client Login Scrap Book Associate Corner Job Openings Get a Job Associate Login Become A Partner Careers … Continue reading"/>
      </Head>

        <section>
        <img className="img100" src="/assets/img/banner/get-job-banner.jpg"/>
        </section>
        
        
   
   
            <section className="contact-page py-50 bg-lighter">
                <div className="container">
                        <div className="section-title text-center pb-20">                            
                            <h2 className="mainh1"><span>APPLY</span> TODAY</h2>
                        </div>
                   
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-form ml-40 rml-0 rmt-55 wow fadeInRight delay-0-2s">
                            <form id="contactForm" onSubmit={registerUser}>
                                    <div className="row clearfix justify-content-center">
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label for="name">Full Name*</label>
                                                <input type="text" id="name" name="name" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label for="email">Email*</label>
                                                <input type="email" id="email" name="email" className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="form-group">
                                            <label for="phone_number">Mobile No.*</label>
                                            <input type="text" name="phone_number" id="phone_number" maxlength="10" minlength="10" className="form-control" required/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                            <label for="alternatephone_number">Alternate Mobile No.*</label>
                                            <input type="text" name="alternatephone_number" id="alternatephone_number" maxlength="10" minlength="10" className="form-control" required/>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="form-group">  
                                            <label for="education">Education*</label>
                                            <select name="education" id="education" className="form-control" required>
                                                <option value="">---</option>
                                                <option value="Primary Education">Primary Education</option>
                                                <option value="Secondary Education">Secondary Education</option>
                                                <option value="Bachelor Degree">Bachelor Degree</option>
                                                <option value="Master Degree">Master Degree</option>
                                                <option value="Certification Course">Certification Course</option>
                                                <option value="Diploma Course">Diploma Course</option>
                                            </select>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="form-group">  
                                            <label for="college_name">College Name*</label>
                                            <input type="text" name="college_name" id="college_name" className="form-control" required />
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-4">
                                            <div className="form-group">  
                                            <label for="profile_for">Profile For*</label>
                                            <input type="text" name="profile_for" id="profile_for" className="form-control" required />
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="form-group">  
                                            <label for="current_role">Current Role</label>
                                            <input type="text" name="current_role" id="current_role" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="form-group">  
                                            <label for="aadhar_no">Aadhar No.</label>
                                            <input type="text" name="aadhar_no" id="aadhar_no" maxlength="12" minlength="12" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-6">
                                            <div className="form-group">  
                                            <label for="aadharfc">Aadhar Front Copy</label>
                                            <input type="file" name="aadharfc" id="aadharfc" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-6">
                                            <div className="form-group">  
                                            <label for="aadharbc">Aadhar Back Copy</label>
                                            <input type="file" name="aadharbc" id="aadharbc" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-12">
                                            <div className="">  
                                            <h4 className="h3themecolor">Total Experience*</h4>
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-6">
                                            <div className="form-group">  
                                            <label for="years">Year(s)</label>
                                            <select name="years" id="years" className="form-control" required>
                                                   <option value="">---</option>
                                                   <option value="0 years">0 years</option>
                                                   <option value="1 years">1 years</option>
                                                   <option value="2 years">2 years</option>
                                                   <option value="3 years">3 years</option>
                                                   <option value="4 years">4 years</option>
                                                   <option value="5 years">5 years</option>
                                                   <option value="6 years">6 years</option>
                                                   <option value="7 years">7 years</option>
                                                   <option value="8 years">8 years</option>
                                                   <option value="9 years">9 years</option>
                                                   <option value="10 years">10 years</option>
                                                   <option value="11 years">11 years</option>
                                                   <option value="12 years">12 years</option>
                                                   <option value="13 years">13 years</option>
                                                   <option value="14 years">14 years</option>
                                                   <option value="15 years">15 years</option>
                                                   <option value="16 years">16 years</option>
                                                   <option value="17 years">17 years</option>
                                                   <option value="18 years">18 years</option>
                                                   <option value="19 years">19 years</option>
                                                   <option value="20 years">20 years</option>
                                                   <option value="20+ years">20+ years</option>
                                            </select>
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-6">
                                            <div className="form-group">  
                                            <label for="months">Month(s)</label>
                                            <select name="months" id="months" className="form-control" required>
                                                   <option value="">---</option>
                                                   <option value="0">0</option>
                                                   <option value="1 Month">1 Month</option>
                                                   <option value="2 Month(s)">2 Month(s)</option>
                                                   <option value="3 Month(s)">3 Month(s)</option>
                                                   <option value="4 Month(s)">4 Month(s)</option>
                                                   <option value="5 Month(s)">5 Month(s)</option>
                                                   <option value="6 Month(s)">6 Month(s)</option>
                                                   <option value="7 Month(s)">7 Month(s)</option>
                                                   <option value="8 Month(s)">8 Month(s)</option>
                                                   <option value="9 Month(s)">9 Month(s)</option>
                                                   <option value="10 Month(s)">10 Month(s)</option>
                                                   <option value="11 Month(s)">11 Month(s)</option>
                                            </select>
                                            </div>
                                        </div>
                                        
                                       <div className="col-sm-12">
                                            <div className="">  
                                            <h4 className="h3themecolor">Current Salary*</h4>
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-6">
                                            <div className="form-group">  
                                            <label for="lakhs">In Lakhs</label>
                                            <select name="lakhs" id="lakhs" className="form-control" required>
                                                    <option value="">---</option>
                                                       <option value="1">1</option>
                                                       <option value="2">2</option>
                                                       <option value="3">3</option>
                                                       <option value="4">4</option>
                                                       <option value="5">5</option>
                                                       <option value="6">6</option>
                                                       <option value="7">7</option>
                                                       <option value="8">8</option>
                                                       <option value="9">9</option>
                                                       <option value="10">10</option>
                                                       <option value="11">11</option>
                                                       <option value="12">12</option>
                                                       <option value="13">13</option>
                                                       <option value="14">14</option>
                                                       <option value="15">15</option>
                                                       <option value="16">16</option>
                                                       <option value="17">17</option>
                                                       <option value="18">18</option>
                                                       <option value="19">19</option>
                                                       <option value="20">20</option>
                                                       <option value="21+">21+</option>
                                                       <option value="22+">22+</option>
                                                       <option value="23+">23+</option>
                                                       <option value="24+">24+</option>
                                                       <option value="25+">25+</option>
                                                       <option value="26+">26+</option>
                                                       <option value="27+">27+</option>
                                                       <option value="28+">28+</option>
                                                       <option value="29+">29+</option>
                                                       <option value="30+">30+</option>
                                            </select>
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-6">
                                            <div className="form-group">  
                                            <label for="in_housand">In Thousand</label>
                                            <select name="in_housand" id="in_housand" className="form-control" required>
                                                   <option value="">---</option>
                                                   <option value="0">0</option>
                                                   <option value="5">5</option>
                                                   <option value="10">10</option>
                                                   <option value="15">15</option>
                                                   <option value="20">20</option>
                                                   <option value="25">25</option>
                                                   <option value="30">30</option>
                                                   <option value="35">35</option>
                                                   <option value="40">40</option>
                                                   <option value="45">45</option>
                                                   <option value="50">50</option>
                                                   <option value="55">55</option>
                                                   <option value="60">60</option>
                                                   <option value="65">65</option>
                                                   <option value="70">70</option>
                                                   <option value="75">75</option>
                                                   <option value="80">80</option>
                                                   <option value="85">85</option>
                                                   <option value="90">90</option>
                                                   <option value="95">95</option>
                                            </select>
                                            </div>
                                        </div>
                                        
                                         <div className="col-sm-6">
                                            <div className="form-group">  
                                            <label for="resume">Resume Upload*</label>
                                            <input type="file" name="resume" id="resume" className="form-control" required/>
                                            </div>
                                        </div>
                                        
                                         <div className="col-sm-6">
                                            <div className="form-group">  
                                            <label for="clocation">Current Location*</label>
                                            <input type="text" name="clocation" id="clocation" className="form-control" required/>
                                            </div>
                                        </div>
                                       

                                        <div className="col-sm-12">
                                        <div className="form-group mb-0">
                                            <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Send Message"/>
                                        </div>
                                        <div className="clearfix"></div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>
                                    
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}