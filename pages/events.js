import Link from "next/link"
import Head from "next/head"

export default function Events(){

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/yomamultinational/wp-json/contact-form-7/v1/contact-forms/13901/feedback');
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
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.leadsquared_EmailAddress.value +
            "&leadsquared-Mobile=" + event.target.phone_number.value +
            "&leadsquared-JobTitle=" + event.target.leadsquared_JobTitle.value +
            "&leadsquared-Company=" + event.target.leadsquared_Company.value +
            "&leadsquared-mx_Showed_Interest_in=" + event.target.interest_in.value +
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value +
            "&referredby=" + event.target.referredby.value)

    }

    return(
        <>
        <Head>
         <title>Events - Yoma Multinational</title>
         <meta name="description" content=""/>
      </Head>
        <section className="pricing-section pt-50 rpt-95 pb-0 rpb-70">
            <div className="container">
                <div className="section-title text-center mb-35">
                    <h2 className="mainh1"><span></span>Executive Showcase Events Schedule</h2>
                </div>
                <div className="row">
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="pricing-item wow fadeInUp delay-0-2s">
                            <div className="pricing-header">
                                <h5 className="pricing-title">Executive Showcase Event</h5>
                                <span className="price">13th May - 2022</span>
                                <h3 className="time">03:00 PM to 03:30 PM</h3>
                            </div>
                            <a className="theme-btn btn-circle mt-20" href="#register-now">Register Now</a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="pricing-item wow fadeInUp delay-0-2s">
                            <div className="pricing-header">
                                <h5 className="pricing-title">Executive Showcase Event</h5>
                                <span className="price">10th June - 2022</span>
                               <h3 className="time">03:00 PM to 03:30 PM</h3>
                            </div>
                            <a className="theme-btn btn-circle mt-20" href="#register-now">Register Now</a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="pricing-item wow fadeInUp delay-0-2s">
                            <div className="pricing-header">
                                <h5 className="pricing-title">Executive Showcase Event</h5>
                                <span className="price">8th July - 2022</span>
                                <h3 className="time">03:00 PM to 03:30 PM</h3>
                            </div>
                            <a className="theme-btn btn-circle mt-20" href="#register-now">Register Now</a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="pricing-item wow fadeInUp delay-0-2s">
                            <div className="pricing-header">
                                <h5 className="pricing-title">Executive Showcase Event</h5>
                                <span className="price">12th Aug - 2022</span>
                                <h3 className="time">03:00 PM to 03:30 PM</h3>
                            </div>
                            <a className="theme-btn btn-circle mt-20" href="#register-now">Register Now</a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="pricing-item wow fadeInUp delay-0-2s">
                            <div className="pricing-header">
                                <h5 className="pricing-title">Executive Showcase Event</h5>
                                <span className="price">16th Sep - 2022</span>
                                <h3 className="time">03:00 PM to 03:30 PM</h3>
                            </div>
                            <a className="theme-btn btn-circle mt-20" href="#register-now">Register Now</a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="pricing-item wow fadeInUp delay-0-2s">
                            <div className="pricing-header">
                                <h5 className="pricing-title">Executive Showcase Event</h5>
                                <span className="price">14th Oct - 2022</span>
                                <h3 className="time">03:00 PM to 03:30 PM</h3>
                            </div>
                            <a className="theme-btn btn-circle mt-20" href="#register-now">Register Now</a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="pricing-item wow fadeInUp delay-0-2s">
                            <div className="pricing-header">
                                <h5 className="pricing-title">Executive Showcase Event</h5>
                                <span className="price">11th Nov - 2022</span>
                                <h3 className="time">03:00 PM to 03:30 PM</h3>
                            </div>
                            <a className="theme-btn btn-circle mt-20" href="#register-now">Register Now</a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="pricing-item wow fadeInUp delay-0-2s">
                            <div className="pricing-header">
                                <h5 className="pricing-title">Executive Showcase Event</h5>
                                <span className="price">9th Dec - 2022</span>
                                <h3 className="time">03:00 PM to 03:30 PM</h3>
                            </div>
                            <a className="theme-btn btn-circle mt-20" href="#register-now">Register Now</a>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>
        
        
        <section className="mb-40 pt-50" id="register-now">
            <div className="container">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className=" bg-white p-10 wow fadeInRight delay-0-4s">
                           <div className="text-center"><h4 className="mainh1"><span></span> KINDLY FILL YOUR DETAILS OUR SUBJECT MATTER EXPERTS WILL CONNECT YOU WITHIN 24 WORKING HOURS.</h4></div>
                           <form id="contactForm" onSubmit={registerUser}>
                                <div className="row">
                                    <div className="form-group col-sm-6">                                   
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Your Name*" required/>
                                    </div>
                                    <div className="form-group col-sm-6">                                   
                                    <input type="email" name="leadsquared_EmailAddress" id="leadsquared_EmailAddress" className="form-control" placeholder="Your Email*" required />
                                    </div>
                                    <div className="form-group col-sm-6">                                   
                                    <input type="text" name="phone_number" id="phone_number" maxlength="10" minlength="10" className="form-control" placeholder="Phone No.*" required/>
                                    </div>
                                    <div className="col-sm-6">
                                            <div className="form-group">                                                
                                            <input type="text" name="leadsquared_JobTitle" id="leadsquared_JobTitle" className="form-control" placeholder="Designation" />
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-12">                                   
                                    <input type="text" name="leadsquared_Company" id="leadsquared_Company" className="form-control" placeholder="Company Name*" required />
                                    </div>
                                    <div className="form-group col-sm-6">
                                    <select className="form-control" name="interest_in" required>
                                        <option value="">---Pick up Slot*---</option>
                                        <option value="Executive Showcase Event : 13th May - 2022">Executive Showcase Event : 13th May - 2022</option>
                                        <option value="Executive Showcase Event : 10th June - 2022">Executive Showcase Event : 10th June - 2022</option>
                                        <option value="Executive Showcase Event : 8th July - 2022">Executive Showcase Event : 8th July - 2022</option>
                                        <option value="Executive Showcase Event : 12th Aug - 2022">Executive Showcase Event : 12th Aug - 2022</option>
                                        <option value="Executive Showcase Event : 16th Sep - 2022">Executive Showcase Event : 16th Sep - 2022</option>
                                        <option value="Executive Showcase Event : 14th Oct - 2022">Executive Showcase Event : 14th Oct - 2022</option>
                                        <option value="Executive Showcase Event : 11th Nov - 2022">Executive Showcase Event : 11th Nov - 2022</option>
                                        <option value="Executive Showcase Event : 9th Dec - 2022">Executive Showcase Event : 9th Dec - 2022</option>
                                    </select>                  
                                    </div>

                                    <div className="form-group col-sm-6">
                                        <select name="referredby" className="form-control">
                                            <option value="">Referred By</option>
                                            <option value="Sales Representative">Sales Representative</option>
                                            <option value="Social Media">Social Media</option>
                                            <option value="Google Search">Google Search</option>                                            
                                        </select>                 
                                    </div>

                                    <div className="col-lg-6 d-none">
                                        <div className="form-group">
                                            <label>Business Entity*</label>                              
                                            <select className="form-control" name="Business_Entity">
                                                <option value="Ken Blanchard Companies">Ken Blanchard Companies</option>
                                            </select>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        </div>                                    
                                      
                                    <div className="form-group d-none col-sm-12">                                   
                                    <input type="text" name="leadsquared_mx_Business_Entity" id="leadsquared_mx_Business_Entity" value="YOMA Business Solutions" className="form-control" />
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
                    <div className="col-sm-1"></div>
                </div>
            </div>
          
        </section>
        </>
    )
}