import Link from "next/link"
import Head from "next/head"

export default function SalesConsultant(){
    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://bmelectrician.com/yoma/wp-json/contact-form-7/v1/contact-forms/3943/feedback');
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
        xhttp.send("YourName=" + event.target.name.value +
            "&email-243=" + event.target.email.value +
            "&tel=" + event.target.phone_number.value +
            "&location=" + event.target.locations.value +
            "&occupation=" + event.target.occupation.value +
            "&companyName=" + event.target.leadsquared_Company.value +
            "&designation=" + event.target.designation.value +
            "&referredby=" + event.target.referredby.value +
            "&messsage=" + event.target.Message.value)

    }

    return(
    <>
    <Head>
         <title>Sales Consultants - Yomamultinational</title>
         <meta name="description" content="1800 102 1345 yoma.info@byldgroup.com Home ABOUT US Who We Are Mission, Vision & Values Life at Yoma Solutions General Staffing Industrial Staffing Staff Augmentation Managed Services Shared Resource Program Apprenticeship Program (NAPS) Client Corner Client Testimonials Our Clientele Client Login Scrap Book Associate Corner Job Openings Get a Job Associate Login Become A Partner Careers … Continue reading"/>
      </Head>

    <section>
          <img className="img100" src="/assets/img/banner/sales-consultant.jpg"/>
        </section>
        
        <section className="what-we-do bg-lighter pt-50 rpt-40 pb-40 rpb-30">
            <div className="container">
                <div className="section-title text-center mb-35">
                <h3 className="h3themecolor">What it is like to be a sales consultant?</h3> 
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-6">
                        <div className="feature-item wow fadeInUp delay-0-2s animated animateUP">                       
                        <div className="icon">
                            <img className="imgicon70" src="/assets/img/icon/salesi1-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Flexibility to work from home.</p>
                        </div>
                        </div>
                    </div>
                    
                  
                    <div className="col-sm-6 col-md-6">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/salesi2-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Earn huge incentives using your network and mobile phone.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/salesi3-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Be the owner of your own earnings.</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-6">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/salesi4-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Get maximum incentives as per the industry.</p>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </section>
            
            <section className="what-we-do pt-50 rpt-40 pb-40 rpb-30">
            <div className="container">
                <div className="section-title text-center mb-35">
                <h3 className="h3themecolor">Who can apply?</h3> 
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-2s animated animateUP">                       
                        <div className="icon">
                            <img className="imgicon70" src="/assets/img/icon/salesi5-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>People who are working as HR Managers and HR executives in their current organization can apply.</p>
                        </div>
                        </div>
                    </div>
                    
                  
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/salesi5-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Anyone who is having networks in HR and can help YOMA in driving the sales.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/salesi5-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Degree/education is not specified.</p>
                        </div>
                        </div>
                    </div>
            
                </div>
            </div>
            </section>
            
            
            <section className="what-we-do bg-lighter pt-50 rpt-40 pb-40 rpb-30">
            <div className="container">
                <div className="section-title text-center mb-35">
                <h3 className="h3themecolor">Scope of work & criteria to get eligible</h3> 
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-2s animated animateUP">                       
                        <div className="icon">
                            <img className="imgicon70" src="/assets/img/icon/salesi6-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Fix Initial meeting with the client.</p>
                        </div>
                        </div>
                    </div>
                    
                  
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/salesi7-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Hand hold the client till closure.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/salesi8-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Support in signing the agreement.</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/salesi9-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Get qualified leads to work on the basis of your performance.</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/salesi10-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Payout will start only when the client gets payrolled.</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/salesi11-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Assess your own performance using a consultant login account and ensure complete transparency.</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/salesi12-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Payroll data will be uploaded every month in your Consultant login to track associate count.</p>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </section>
            
            
             <section className="contact-page py-50">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <div className="contact-form ml-40 rml-0 rmt-55 wow fadeInRight delay-0-2s">
                                <h3 className="comment-title mb-35">Connect with us</h3>                                
                                
                                <form id="contactForm" className="hero-form mt-35" onSubmit={registerUser}>
                                    <div className="row clearfix justify-content-center">
                                        <div className="col-sm-6">
                                            <div className="form-group">                                                
                                                <input type="text" id="name" name="name" className="form-control" placeholder="Your Name*" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">                                                
                                                <input type="email" id="email" name="email" className="form-control" placeholder="Your Email*" required />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">                                                
                                            <input type="text" name="phone_number" id="phone_number" required="" maxlength="10" minlength="10" className="form-control" placeholder="Phone No.*"/>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">                                                
                                            <select name="locations" className="form-control" required>
                                            <option value="">Location*</option>
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                            <option value="Assam">Assam</option>
                                            <option value="Bihar">Bihar</option>
                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                            <option value="Jharkhand">Jharkhand</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Manipur">Manipur</option>
                                            <option value="Meghalaya">Meghalaya</option>
                                            <option value="Mizoram">Mizoram</option>
                                            <option value="Nagaland">Nagaland</option>
                                            <option value="Odisha">Odisha</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Sikkim">Sikkim</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Tripura">Tripura</option>
                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                            <option value="Uttarakhand">Uttarakhand</option>
                                            <option value="West Bengal">West Bengal</option>
                                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                            <option value="Chandigarh">Chandigarh</option>
                                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                            <option value="Daman and Diu">Daman and Diu</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Lakshadweep">Lakshadweep</option>
                                            <option value="Puducherry">Puducherry</option>
                                            <option value="Others">Others</option>
                                        </select>
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-6">
                                            <div className="form-group">                                                
                                            <select name="referredby" className="form-control">
                                                    <option value="">Referred By</option>
                                                    <option value="Sales Representative">Sales Representative</option>
                                                    <option value="Social Media">Social Media</option>
                                                    <option value="Google Search">Google Search</option>                                            
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-6">
                                            <div className="form-group">                                                
                                            <input type="text" name="leadsquared_Company" id="leadsquared_Company" className="form-control" placeholder="Company Name*" required />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">                                                
                                            <input type="text" name="designation" id="designation" className="form-control" placeholder="Designation" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-6">
                                            <div className="form-group">                                                
                                            <select name="referredby" className="form-control">
                                            <option value="">Referred By</option>
                                            <option value="Email">Email</option>
                                            <option value="Social Media">Social Media</option>
                                            <option value="Google Search">Google Search</option>
                                            <option value="Website">Website</option>
                                            <option value="Reference">Reference</option>
                                            <option value="Sales Representative">Sales Representative</option>
                                        </select>
                                            </div>
                                        </div>

                                        

                                        <div className="col-sm-12">
                                            <div className="form-group">                                                
                                            <textarea name="Message" className="form-control" id="Message" cols="30" rows="3" placeholder="Your Message"></textarea>
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
                        <div className="col-sm-2"></div>
                    </div>
                </div>
            </section>
            
            <section className="what-we-do bgdarkyoma pt-40 rpt-40 pb-40 rpb-30">
            <div className="container">
                <div className="section-title text-center mb-35">
                <h3 className="h3themecolor">Rewards and incentives</h3> 
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12">
                        <div className="feature-item wow fadeInUp delay-0-2s animated animateUP">                       
                           <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Club</th>
                                    <th>Criteria/milestone</th>
                                    <th>Incentives Premium</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Bronze</td>
                                    <td>Achieve 500 numbers within 6 months</td>
                                    <td>Get certificate and cash reward of INR 20, 000</td>
                                  </tr>
                                  <tr>
                                    <td>Silver</td>
                                    <td>Achieve 1000 numbers in a year</td>
                                    <td>Get certificate and cash reward of INR 40, 000</td>
                                  </tr>
                                  <tr>
                                    <td>Gold</td>
                                    <td>Achieve 1500 numbers within 1.5 years</td>
                                    <td>Get certificate and cash reward of INR 80, 000</td>
                                  </tr>
                                </tbody>
                              </table>
                        </div>
                    </div>
            
                </div>
            </div>
            </section>
    </>
    )
}