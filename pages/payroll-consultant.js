      
import Link from "next/link"
import Head from "next/head"  
      
export default function PayrollConsultant(){
    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://bmelectrician.com/yoma/wp-json/contact-form-7/v1/contact-forms/634/feedback');
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
         <title>Payroll Consultant - Yomamultinational</title>
         <meta name="description" content=""/>
      </Head>

        <section>
          <img className="img100" src="/assets/img/banner/payroll-consultant.jpg"/>
        </section>
        
        <section className="what-we-do bg-lighter pt-40 rpt-40 pb-40 rpb-30">
            <div className="container">
                <div className="section-title text-center mb-35">
                <h3 className="h3themecolor">Benefits of working with YOMA</h3> 
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-2s animated animateUP">                       
                        <div className="icon">
                            <img className="imgicon70" src="/assets/img/icon/exlp1.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Complete transparency between the organization and freelancer/consultant.</p>
                        </div>
                        </div>
                    </div>
                    
                  
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/exlp2.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Opportunity to earn and become adaptable to different working conditions.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/salesi2-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>You need only a laptop and good internet connectivity to start working.</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/flex-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>The flexibility of work without any target or pressure.</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/slab-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Incentives are paid basis different slabs.</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/vie-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Complete visibility of recruitments and incentives through our portal.</p>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </section>
            
            <section className="what-we-do pt-50 rpt-40 pb-40 rpb-30">
            <div className="container">
                <div className="section-title text-center mb-35">
                <h3 className="h3themecolor">Eligibility to become a payroll consultant</h3> 
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-2s animated animateUP">                       
                        <div className="icon">
                            <img className="imgicon70" src="/assets/img/icon/salesi5-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>The payroll vendor should have a minimum of 2-3 years of experience in handling the payroll process.</p>
                        </div>
                        </div>
                    </div>
                    
                  
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/lap-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Vendor should have his own device (laptop) to work on.</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/wag-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>The payroll vendor should be aware and be updated with minimum wages on timely revisions.</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/exlp2.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Strong knowledge about MS office is a must.</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/salesi10-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Should be aware of the pay structure ( PF & ESIC applicability, TDS, PT, LWF & Others).</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/reff-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>2 professional references.</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/salesi9-svg.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Final selection will be done on the basis of aptitude test on payroll processing.</p>
                        </div>
                        </div>
                    </div>
            
                </div>
            </div>
            </section>
            
            
             
            
            
             <section className="contact-page py-50 bg-lighter">
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
                                                <input type="email" id="email" name="email" className="form-control" placeholder="Work Email/Email*" required />
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
                                            <select name="occupation" className="form-control" required>
                                            <option value="">Occupation*</option>
                                            <option value="Service">Service</option>
                                            <option value="Self Employed">Self Employed</option>
                                            <option value="Homemaker">Homemaker</option>
                                            <option value="Freelancer">Freelancer</option>
                                            <option value="Student">Student</option>
                                            <option value="Others">Others</option>
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
                                                    <option value="Sales Representative">Sales Representative</option>
                                                    <option value="Social Media">Social Media</option>
                                                    <option value="Google Search">Google Search</option>                                            
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
        </>
    )
}
            