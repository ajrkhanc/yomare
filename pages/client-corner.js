import Link from "next/link"
import Head from "next/head"

export default function ClientCorner(){
    const registerUser = async event => {
        event.preventDefault()
  
        document.getElementById("submitbuttonform").value = "Submitting form...."
  
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
           // console.log(this.responseText.status);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/yomamultinational/wp-json/contact-form-7/v1/contact-forms/26/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
           if (xhttp.readyState == 4) {
              var res = JSON.parse(xhttp.responseText);
              console.log(res)
              if (res.status == "mail_sent") {
                 document.getElementById("contactForm").reset();
  
                 document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
  
                 document.getElementById("showlabel").style.display = "block";
                 window.setTimeout(function () {
                     window.location.href = "/thank-you-lp"
                 }, 3000);
  
              } else {
                 document.getElementById("showlabel").innerHTML = "There was a problem with the request.";
                 document.getElementById("showlabel").style.display = "block";
  
              }
           }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-Mobile=" + event.target.phone_number.value +
            "&leadsquared-mx_States=" + event.target.location.value +
            "&leadsquared-Company=" + event.target.leadsquared_Company.value +
            "&leadsquared-Notes=" + event.target.Notes.value +
            "&referredby=" + event.target.referredby.value +
            "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value)
  
     }

    return (
        <>

      <Head>
         <title>Apprenticeship Program | Apprenticeship | YOMA Business</title>
         <meta name="description" content="Client Login Home ABOUT US Who We Are Mission, Vision & Values Life at Yoma Solutions General Staffing Industrial Staffing Staff Augmentation Managed Services Shared Resource Program Apprenticeship Program (NAPS) Client Corner Client Testimonials Our Clientele Client Login Scrap Book Associate Corner Job Openings Get a Job Associate Login Become A Partner Careers Blogs Contact … Continue reading"/>
      </Head>
            <section className="hero-section-three bgs-cover overlay pt-40 pb-40 clcornerbg" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="hero-content text-white rmb-65">
                        <h2 className="wow fadeInUp delay-0-4s mt-20">Continuously adding value to our customer’s businesses!</h2>
                           <h3 className="sub-title d-block wow fadeInUp delay-0-2s">Let us help you find the best resource for your company.</h3>
                           <h3 className="sub-title d-block wow fadeInUp delay-0-2s">Highly effective, employee screening process for hiring of blue-collared and entry-level staff.</h3>
                            
                            <div className="hero-btns mt-35 wow fadeInUp delay-0-6s">
                                <a href="#" className="theme-btn mr-15 mb-10">Post a job free</a>
                                <a href="#" className="theme-btn style-five mb-10">Business enquiry</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="hero-section-form bg-white p-20 wow fadeInRight delay-0-4s">
                           <div className="section-title">
                               <h2 className="mb-0">Submit your query</h2>
                           </div>
                            <p>Let us know what profiles you’re looking for</p>
                            
                            <form id="contactForm" onSubmit={registerUser}>
                            <div class="row">
                                    <div class="form-group col-sm-6">                                   
                                        <input type="text" id="name" name="name" class="form-control" placeholder="Your Name*" required/>
                                    </div>
                                    <div class="form-group col-sm-6">                                   
                                    <input type="text" name="phone_number" id="phone_number" maxlength="10" minlength="10" class="form-control" placeholder="Phone No.*" required/>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <select name="location" class="form-control" required>
                                            <option value="">Select States*</option>
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
                                    
                                    <div class="form-group col-sm-6">                                   
                                    <input type="text" name="leadsquared_Company" id="leadsquared_Company" class="form-control" placeholder="Company Name*" required />
                                    </div>

                                    <div class="col-sm-12">
                                            <div class="form-group"> 
                                            <textarea name="Notes" placeholder="Let us know what you are looking for."></textarea>
                                            </div>
                                        </div>

                                    <div class="form-group col-sm-12">
                                    <select class="form-control" name="referredby">
                                        <option value="Referred By">--Referred By--</option>
                                        <option value="Sales Representative">Sales Representative</option>
                                        <option value="Email">Email</option>
                                        <option value="Social Media">Social Media</option>
                                        <option value="Google Search">Google Search</option>
                                        <option value="Website">Website</option>
                                        <option value="Reference">Reference</option>
                                    </select>                 
                                    </div>

                                    <div class="col-lg-6 d-none">
                                        <div class="form-group">
                                            <label>Business Entity*</label>                              
                                            <select class="form-control" name="Business_Entity">
                                                <option value="Ken Blanchard Companies">Ken Blanchard Companies</option>
                                            </select>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                        </div>                                    
                                      
                                    <div class="form-group d-none col-sm-12">                                   
                                    <input type="text" name="leadsquared_mx_Business_Entity" id="leadsquared_mx_Business_Entity" value="YOMA Business Solutions" class="form-control" />
                                    <input className="d-none" type="text" name="leadsquared_mx_Business_Entity" value="YOMA Business Solutions"/>
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
            <div className="hero-line-shape">
                <img src="/assets/images/hero/hero-four-shape.png" alt="Hero line shape"/>
            </div>
        </section>
        
        <div id="ourclientele" className="client-logo-area pt-40">
            <div className="container">
               
              <h2 className="mainh1 text-center">Our <span>Clientele</span></h2>
         
                <hr/>
                <div className="logo-carousel-wrap pt-30 pb-40">
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl1.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl2.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl3.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl4.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl5.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl6.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl8.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl9.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl10.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl11.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl12.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl13.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl14.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl15.png" alt="Client Logo"/></a>
                    </div>
                    <div className="logo-item">
                        <a href="#"><img src="/assets/img/logo/cl16.png" alt="Client Logo"/></a>
                    </div>
                </div>
            </div>
        </div>
    
        
        
        
        
        
        <section id="clientspeak" className="cournter-section-three bg-lighter text-center pt-65 rpt-95 pb-70 rpb-50">
   <div className="container">
      <div className="section-title mb-55">
         <h2 className="mainh1"><span>Clients </span>speak</h2>
      </div>
     
      <div className="testimonial-wrap1 row">
          <div className="wow fadeInLeft delay-0-2s col-sm-3"></div>
         <div className="wow fadeInLeft delay-0-2s col-sm-6">
          <div className="testimonial-item mpaj">
            <div className="testimonial-two-active">            
               <div className="testimonial-two-item">
                  <div className="author-description">                     
                     <div className="designation">
                        <h5>Deepak Chauhan</h5>
                        <span>Halonix Technologies Pvt.Ltd. (Human Resources)</span>
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>We want you to know that we are very pleased with the quality of service your company provides and appreciate the constant support. We sincerely appreciate your responsiveness and the way you conduct business. We look forward to a successful working relationship with you.</p>
               </div>

               <div className="testimonial-two-item">
                  <div className="author-description">                     
                     <div className="designation">
                        <h5>Varun Kaushik</h5>
                        <span>Livepure (Manager - Key Accounts)</span>
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>We really appreciate all of your support in the process of managing the off-role manpower for MT- Livpure. You’ve been right there, helping out wherever and whenever needed for these past few months. I am very appreciative of your assistance and am looking forward to continuing to work together.</p>
               </div>

               <div className="testimonial-two-item">
                  <div className="author-description">                    
                     <div className="designation">
                        <h5>Rahul Jha</h5>
                        <span>WaterAid India (Program Coordinator)</span>
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>YOMA has been an excellent aid for our recruitment needs. Brilliant communication and strong talent are the hallmarks of the service that they provide, and it is a pleasure to have such an asset available to us. I appreciate their quick response, efficiency, and prompt follow-up to my requests.</p>
               </div>
            </div>
            </div>
         </div>
         
         <div className="wow fadeInLeft delay-0-2s col-sm-3"></div>
      </div>
   </div>
</section>

<section className="pb-50 pt-40">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="section-title text-center  pb-20">
                            <h2 className="mainh1"><span>Client </span> testimonials</h2> 
                        </div>
                    </div>
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox">
                        <iframe width="100%" height="" src="https://www.youtube.com/embed/2fM6qe2L6XA"></iframe>
                        </div>
                    </div>
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox">
                        <iframe width="100%" height="" src="https://www.youtube.com/embed/kL_eWZommFY"></iframe>
                        </div>
                    </div>
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox">
                        <iframe width="100%" height="" src="https://www.youtube.com/embed/bbRBg35W73M"></iframe>
                        </div>
                    </div>
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox">
                        <iframe width="100%" height="" src="https://www.youtube.com/embed/R92aBuKVE8o"></iframe>
                        </div>
                    </div>
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox">
                        <iframe width="100%" height="" src="https://www.youtube.com/embed/Yon0KjySlMk"></iframe>
                        </div>
                    </div>
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox">
                        <iframe width="100%" height="" src="https://www.youtube.com/embed/QBdmwR1sXBY"></iframe>
                        </div>
                    </div>
                    
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox">
                        <iframe width="100%" height="" src="https://www.youtube.com/embed/qEXoCDhlaWM"></iframe>
                        </div>
                    </div>
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox">
                        <iframe width="100%" height="" src="https://www.youtube.com/embed/2MJMnw-4jpQ"></iframe>
                        </div>
                    </div>
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox">
                        <iframe width="100%" height="" src="https://www.youtube.com/embed/fegEEN0QjEc"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}