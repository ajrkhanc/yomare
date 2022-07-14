import Link from "next/link"
import Head from "next/head"

export default function BecomeAPartnerPage(){
    return(
        <>
        <Head>
        <title>BECOME A PARTNER - Yomamultinational</title>
        <meta name="description" content="1800 102 1345 yoma.info@byldgroup.com Home ABOUT US Who We Are Mission, Vision & Values Life at Yoma Solutions General Staffing Industrial Staffing Staff Augmentation Managed Services Shared Resource Program Apprenticeship Program (NAPS) Client Corner Client Testimonials Our Clientele Client Login Scrap Book Associate Corner Job Openings Get a Job Associate Login Become A Partner Careers … Continue reading."/>
        </Head>

        <section>
          <img className="img100" src="/assets/img/banner/become-a-partner-banner.jpg"/>
        </section>
        
        <section className="featured-section bgs-cover pt-40 homeservicebg">
   <div className="container">
      <div className="row justify-content-center">
         <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="section-title text-center mb-35">
               <h2 className="mainh1"><span>BECOME</span> A PARTNER WITH US</h2>
            </div>
         </div>
      </div>
      <div className="row align-items-center icon70">
         <div className="col-sm-6">
            <div className="feature-item wow fadeInUp delay-0-2s">
               <div className="icon">
                  <img src="/assets/img/icon/staffingi2.png"/>                                
               </div>
               <div className="feature-content">
                  <h5>Why become a partner</h5>
                  <p>We strive to make each company function like leading business giants around the world. Our core-strengths have enable us achieve the breakthrough and we are proudly serving the leading brands like PepsiCo, Freecharge, and more.</p>
               </div>
            </div>
         </div>
         <div className="col-sm-6">
            <div className="feature-item wow fadeInUp delay-0-4s">
               <div className="icon">
                  <img src="/assets/img/icon/staffingi2.png"/>
               </div>
               <div className="feature-content">
                  <h5>Who we are</h5>
                  <ul>
                      <li><b>1.</b> Pioneers of end-to-end employee management in India</li>
                      <li><b>2.</b> The only company in India to offer tech-based staffing and managed solutions</li>
                      <li><b>3.</b> India’s fastest growing staffing solutions company</li>
                  </ul>
                  
               </div>
            </div>
         </div>
         
      </div>
   </div>
</section>


<section className="about-section pt-50 pb-20 bg-lighter">
            <div className="container">
                <div className="row align-items-center">                    
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-30">
                        <h2 className="mainh1"><span>Benefits </span> of partnering with us</h2>
                        <p className="text-center">
                        We are one-stop-destination for all your HR and outsourcing business needs.
                        </p>
                        <p className="text-center">
                        <b>Customised one-stop HR solutions</b>
                        </p>
                             
                        </div>
                        <div className="wow fadeInLeft delay-0-2s animated animateleft text-center">                        
                        <img src="/assets/img/become.png" alt="About"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="jobopening" className="services-section-two pb-60 pt-50">
            <div className="container">
                <div className="">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 text-center pb-20">
                           <h2 className="mainh1"><span>Our </span>consultant</h2>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-sm-4 dobleborder">
                            <div className="service-style-two wow fadeInUp delay-0-7s animated animateUP">
                               <a href="/sales-consultants">
                                 <div className="icon mb-30">
                                   <img className="imgicon70" src="/assets/img/icon/staff-svg.png" />
                                 </div>
                                <a href="/sales-consultants" className="theme-btn mr-15 mb-10">Sales consultant</a>
                               </a>
                            </div>
                        </div>
                        <div className="col-sm-4 dobleborder">
                            <div className="service-style-two wow fadeInUp delay-0-7s animated animateUP">
                               <a href="/payroll-consultant">
                                 <div className="icon mb-30">
                                   <img className="imgicon70" src="/assets/img/icon/pay-svg.png" />
                                 </div>
                                <a href="/payroll-consultant" className="theme-btn mr-15 mb-10">Payroll consultant</a>
                               </a>
                            </div>
                        </div>
                        <div className="col-sm-4 dobleborder">
                            <div className="service-style-two wow fadeInUp delay-0-7s animated animateUP">
                               <a href="/sourcing-consultant">
                                 <div className="icon mb-30">
                                   <img className="imgicon70" src="/assets/img/icon/rec-svg.png" />
                                 </div>
                                <a href="/sourcing-consultant" className="theme-btn mr-15 mb-10">consultant</a>
                               </a>
                            </div>
                        </div>
                        
                    </div>
                </div>               
            </div>
        </section>
        </>
    )
}