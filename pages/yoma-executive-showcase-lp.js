import Head from 'next/head'
import Link from 'next/link'

export default function YomaExecutiveShowcase(){
    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/yomamultinational/wp-json/contact-form-7/v1/contact-forms/23/feedback');
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
         <title>YOMA executive showcase lp - Yomamultinational</title>
         <meta name="description" content="1800 102 1345 yoma.info@byldgroup.com Home ABOUT US Who We Are Mission, Vision & Values Life at Yoma Solutions General Staffing Industrial Staffing Staff Augmentation Managed Services Shared Resource Program Apprenticeship Program (NAPS) Client Corner Client Testimonials Our Clientele Client Login Scrap Book Associate Corner Job Openings Get a Job Associate Login Become A Partner Careers … Continue reading YOMA executive showcase"/>
      </Head>
        <section className="hero-section-three bgs-cover overlay pt-40 pb-40 gericlpbg" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <img src="/assets/img/yoma-exe.jpg"/>                         
                    </div>
                    <div className="col-lg-5">
                        <div className="hero-section-form bg-white p-10 wow fadeInRight delay-0-4s">
                          
                            <p>Reserve your seat for this exclusive session and learn why YOMA is your one-stop destination for cost-effective, and all sorts of staffing and business operations needs.</p>
                            <form id="contactForm" className="hero-form mt-20" onSubmit={registerUser}>
                                <div className="row">
                                    <div className="form-group col-sm-6">                                   
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Your Name*" required/>
                                    </div>
                                    <div className="form-group col-sm-6">                                   
                                    <input type="email" name="leadsquared_EmailAddress" id="leadsquared_EmailAddress" className="form-control" placeholder="Your Email*" required />
                                    </div>
                                    <div className="form-group col-sm-6">                                   
                                    <input type="text" name="phone_number" id="phone_number" required="" pattern="[0-9]*" maxlength="10" minlength="10" className="form-control" placeholder="Phone No.*"/>
                                    </div>
                                    <div className="col-sm-6">
                                            <div className="form-group">                                                
                                            <input type="text" name="leadsquared_JobTitle" id="leadsquared_JobTitle" className="form-control" placeholder="Designation" pattern="[a-zA-Z -]*$" title="Only alphabets are allowed" required/>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-12">                                   
                                    <input type="text" name="leadsquared_Company" id="leadsquared_Company" className="form-control" placeholder="Company Name*" required />
                                    </div>
                                    <div className="form-group col-sm-6">
                                    <select className="form-control" name="interest_in" required>
                                        <option value="">---Pick up Slot*---</option>
                                        <option value="YOMA Executive Showcase Event : 9th December, 2022">YOMA Executive Showcase Event : 9th December, 2022</option>
                                    </select>                  
                                    </div>

                                    <div className="form-group col-sm-6">
                                    <select className="form-control" name="referredby" required>
                                        <option value="">--Referred By--</option>                                        
                                        <option value="Email">Email</option>                                        
                                    </select>                 
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
                </div>
            </div>
            <div className="hero-line-shape">
                <img src="/assets/images/hero/hero-four-shape.png" alt="Hero line shape"/>
            </div>
        </section>
        

        <section className="what-we-do bg-lighter pt-50 rpt-40 pb-40 rpb-30">
            <div className="container">                
                <div className="row justify-content-center">
                    <div className="col-sm-12 text-center">
                        <p>
                        Of all the new trends ushered in by emerging technology, one of the biggest game-changers has been a shift in the labor markets. More and more employers are opting for temporary staffing instead of full-time employees. YOMA not only offers vanilla staffing services but provides a galaxy of value-added services in temporary staffing.
                        </p>
                        <p><b>Join our upcoming Executive Showcase on Temporary Staffing and its growing demand in India.</b></p>
                        <p className="whitep2 pb-20">This session will unfurl the secrets to temporary staffing services benefits and also help you understand how it facilitates in:</p>
                    </div>

                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-2s animated animateUP">                       
                        <div className="icon">
                            <img className="imgicon70" src="/assets/img/icon/exlp1.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Providing flexibility to both employees and employers.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-4s animated animateUP">                       
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/exlp2.png" />
                        </div>
                        <div className="feature-content">                           
                            <p>Saving money, time, and resources with the right temporary staffing vendor.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/exlp2.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Value-added services in temporary staffing.</p>
                        </div>
                        </div>
                    </div>                                    
                </div>
            </div>
            </section>

            <section className="what-we-do pt-50 rpt-40 pb-40 rpb-30">
            <div className="container">
                <div className="section-title text-center mb-30">
                <h2 className="mainh1">What makes <span>YOMA </span> different from our counterparts?</h2> 
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-3">
                        <div className="feature-item wow fadeInUp delay-0-2s animated animateUP">                       
                        <div className="icon">
                            <img className="imgicon70" src="/assets/img/icon/exlp1.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>One-click attendance management system</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="feature-item wow fadeInUp delay-0-4s animated animateUP">                       
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/exlp1.png" />
                        </div>
                        <div className="feature-content">                           
                            <p>API integration with existing app or software</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/exlp1.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Custom survey reports</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/exlp1.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Customized reports</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/exlp1.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Technology-driven client dashboard</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/exlp1.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Associate panel</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/exlp1.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Associate dashboard</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/exlp1.png" />
                        </div>
                        <div className="feature-content">                            
                            <p>Attendance management system</p>
                        </div>
                        </div>
                    </div>                                      
                </div>
            </div>
            </section>

            <section className="what-we-do bg-lighter pt-50 rpt-40 pb-40 rpb-30">
            <div className="container">
                <div className="section-title text-center mb-20">
                <h2 className="mainh1"><span>WHY </span> YOMA</h2> 
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-2s animated animateUP">                       
                        <div className="icon">
                            <img className="imgicon70" src="/assets/img/icon/general-staffing.png" />
                        </div>
                        <div className="feature-content">
                            <h5>PEOPLE + TECH MODEL</h5>
                            <p>The only Technology driven staffing company in India.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-4s animated animateUP">
                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/industrial-staffing.png" />
                        </div>
                        <div className="feature-content">
                            <h5>IN-APP SOLUTIONS</h5>
                            <p>Associate self-help App. Client App</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/staff-augmentation.png" />
                        </div>
                        <div className="feature-content">
                            <h5>CUSTOMIZED REPORTS</h5>
                            <p>Customized Dashboard as per client needs</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/manage-services.png" />
                        </div>
                        <div className="feature-content">
                            <h5>DEDICATED SUPPORT STAFF</h5>
                            <p>Providing custom tailored & result oriented solutions</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/shared-resource-program.png" />
                        </div>
                        <div className="feature-content">
                            <h5>COMPLIANCE ADHERENCE</h5>
                            <p>100% Compliance adherence with the clients</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                        
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/apprenticeship-program.png" />
                        </div>
                        <div className="feature-content">
                            <h5>SPEED & ACCURACY</h5>
                            <p>By using technology as an enabler, we deliver with speed & accuracy</p>
                        </div>
                        </div>
                    </div>                                     
                </div>
            </div>
            </section>


            <section className="featured-section bgs-cover pt-40 homeservicebg">
   <div className="container">
      <div className="row justify-content-center">
         <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="section-title text-center mb-35">
               <h2 className="mainh1"><span>OUR</span> SOLUTIONS</h2>
            </div>
         </div>
      </div>
      <div className="row align-items-center icon70">
         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-2s">
               <div className="icon">
                  <img src="/assets/img/icon/general-staffing.png"/>                                
               </div>
               <div className="feature-content">
                  <h5>General Staffing</h5>
                  <p>We provide scalability in operating a larger volume of temporary staffing businesses and help clients to have a visibility of the workflows...</p>
                  <a href="/general-staffing" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-4s">
               <div className="icon">
                  <img src="/assets/img/icon/industrial-staffing.png"/>
               </div>
               <div className="feature-content">
                  <h5>Industrial Staffing</h5>
                  <p>We have expertise in hiring reliable and experienced laborers for all kinds of industries and dynamic requirements.</p>
                  <a href="/industrial-staffing" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-6s">
               <div className="icon">
                  <img src="/assets/img/icon/staff-augmentation.png"/>
               </div>
               <div className="feature-content">
                  <h5>Staff Augmentation</h5>
                  <p>We work on a sanctioned fixed budget finalized for the project and outsourced employee and provide screened manpower within the desired budgets.</p>
                  <a href="/staff-augmentation" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-0-8s">
               <div className="icon">
                  <img src="/assets/img/icon/manage-services.png"/>
               </div>
               <div className="feature-content">
                  <h5>Managed Services</h5>
                  <p>We simplify the highly complex functions of staffing, technology-driven employee management, and payments process in a single click.</p>
                  <a href="/managed-services" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-1-0s">
               <div className="icon">
                  <img src="/assets/img/icon/shared-resource-program.png"/>
               </div>
               <div className="feature-content">
                  <h5>Shared Resource Program</h5>
                  <p>With shared resources model, we enable companies to deploy more resources within their budget and target larger areas.</p>
                  <a href="/shared-resources-program" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
         <div className="col-xl-4 col-md-6">
            <div className="feature-item wow fadeInUp delay-1-2s">
               <div className="icon">
                  <img src="/assets/img/icon/apprenticeship-program.png"/>
               </div>
               <div className="feature-content">
                  <h5>Apprenticeship Program (NAPS)</h5>
                  <p>We support the Indian government’s National Apprenticeship Promotion Scheme (NAPS), including all the endeavors like…</p>
                  <a href="/apprenticeship-program" className="learn-more">Read More <i className="fas fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
        </>
    )
}