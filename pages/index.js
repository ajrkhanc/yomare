import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from "react-slick";

export default function Home() {

   const registerUser = async event => {
      event.preventDefault()
      document.getElementById("submitbuttonform").value = "Submitting form...."
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
          console.log(this.responseText);
      }
      xhttp.open("Post", 'https://ajrkhan.xyz/yomamultinational/wp-json/contact-form-7/v1/contact-forms/18/feedback');
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
          "&leadsquared-EmailAddress=" + event.target.email.value +
          "&leadsquared-Mobile=" + event.target.number.value +
          "&leadsquared-Notes=" + event.target.message.value +
          "&leadsquared-mx_Business_Entity=" + event.target.leadsquared_mx_Business_Entity.value)

  }

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
      };

      var settings1 = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
      };

      var settings2= {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
      };

  return (
    <>
      <Head>
         <title>Yoma Business Solutions | Staffing | BYLD Group</title>
         <meta name="description" content="Yoma Business Solutions is a one-stop HR outsourcing and corporate staffing company. It offers a skilled workforce based on the diverse requirements of third- party payroll companies."/>
      </Head>
      
 <section className="hero-section paddingb">
 <Slider {...settings}>
      <div>
      <img src="/assets/img/banner/banner1.jpg"/>
      </div>
      <div>
      <img src="/assets/img/banner/managed-services.jpg"/>
      </div>
      <div>
      <img src="/assets/img/banner/industrial-staffing-bg.jpg"/>
      </div>
    </Slider>
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
                  <p>We provide scalability in operating a larger volume of temporary staffing businesses and help clients have visibility of the workflows...</p>
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
                  <p>We work on a sanctioned fixed budget finalized for the project and outsourced employees and provide screened manpower within the desired budgets.</p>
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
                  <p>With a shared resources model, we enable companies to deploy more resources within their budget and target larger areas.</p>
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
<section className="about-two pt-40 rpt-80 pb-120 rpb-100">
   <div className="container">
      <div className="about-wrap pt-20">
         <div className="row">
            <div className="col-lg-6">
               <div className="about-two-image rmb-70 wow fadeInLeft delay-0-2s animated animateleft">
                  <img src="/assets/images/about/about-two.jpg" alt="About"/>
               </div>
            </div>
            <div className="col-lg-6 align-self-end">
               <div className="about-content pt-75 rpt-20 pr-70 rpr-0 wow fadeInRight delay-0-2s animated animateright">
                  <div className="section-title mb-35">
                     <h2 className="mainh1"><span>Who</span> Are We</h2>
                  </div>
                  <p>Founded on an innovative idea that every small or large-scaled business should run like a fortune 500 company, we introduced technology-driven HR services that work with clients all the way</p>
                  <p>With an industry-leading suite of <strong>HR outsourcing services</strong> that are backed by cutting-edge technology, we provide one-stop-solution to the following-</p>
                  <p>We can fulfill your need for <strong>third-party payroll companies</strong> with ease. Due to our seamless and exceptional services, we rank amongst the top <strong>payroll software companies</strong> in India.</p>
                  <ul className="list-style-three mt-15">
                     <li>Leaders of end-to-end employee management in India</li>
                     <li>The only company in india to offer tech-based staffing and managed solutions</li>
                     <li>India’s fastest growing staffing solutions company</li>
                  </ul>
                  <a href="/about-us" className="theme-btn style-three mt-25">Read More →</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<section className="cournter-section-three bg-lighter text-center pt-65 rpt-95 pb-70 rpb-50">
   <div className="container">
      <div className="section-title mb-55">
         <h2 className="mainh1">OUR <span>STRENGTHS</span></h2>
      </div>
      <div className="row">
         <div className="col-lg-3 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-2s color-one counted animated animateUP">
               <span className="count-text plus" data-speed="5000" data-stop="150">150</span>
               <span>Clients served</span>
            </div>
         </div>
         <div className="col-lg-3 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-4s color-two counted animated animateUP">
               <span className="count-text plus" data-speed="5000" data-stop="100,000">100,000</span>
               <span>Access to profiles</span>
            </div>
         </div>
         <div className="col-lg-3 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-6s color-one counted animated animateUP">
               <span className="count-text plus" data-speed="5000" data-stop="12">12</span>
               <span>Presence across major cities</span>
            </div>
         </div>
         <div className="col-lg-3 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-8s color-two counted animated animateUP">
               <span className="count-text plus" data-speed="5000" data-stop="450">450</span>
               <span>Deployment locations</span>
            </div>
         </div>
      </div>
      <div className="testimonial-wrap1 row">

         <div className="wow fadeInLeft delay-0-2s col-sm-4">
          <div className="testimonial-item mpaj"> 
            <h3 className="h3themecolor">Clients speak</h3>
            <div className="testimonial-two-active"> 
            <Slider {...settings1}>
               <div>
                  <div className="author-description">                     
                     <div className="designation">
                        <h5>Deepak Chauhan</h5>
                        <span>Halonix Technologies Pvt.Ltd. (Human Resources)</span>
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>We want you to know that we are very pleased with the quality of service your company provides and appreciate the constant support. We sincerely appreciate your responsiveness and the way you conduct business. We look forward to a successful working relationship with you.</p>
               </div>

               <div>
                  <div className="author-description">                     
                     <div className="designation">
                        <h5>Varun Kaushik</h5>
                        <span>Livepure (Manager - Key Accounts)</span>
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>We really appreciate all of your support in the process of managing the off-role manpower for MT- Livpure. You’ve been right there, helping out wherever and whenever needed for these past few months. I am very appreciative of your assistance and am looking forward to continuing to work together.</p>
               </div>

               <div>
                  <div className="author-description">                    
                     <div className="designation">
                        <h5>Rahul Jha</h5>
                        <span>WaterAid India (Program Coordinator)</span>
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>YOMA has been an excellent aid for our recruitment needs. Brilliant communication and strong talent are the hallmarks of the service that they provide, and it is a pleasure to have such an asset available to us. I appreciate their quick response, efficiency, and prompt follow-up to my requests.</p>
               </div>
             </Slider>

            </div>
            </div>
         </div>

         <div className="wow fadeInLeft delay-0-2s col-sm-4">
          <div className="testimonial-item mpaj"> 
            <h3 className="h3themecolor">Associates speak</h3>
            <div className="testimonial-two-active">
                <Slider {...settings2}>

               <div className="testimonial-two-item">
                  <div className="author-description">                     
                     <div className="designation">
                        <h5>Surendra Kumar</h5>
                        <span>Halonix Technologies Pvt. Ltd.</span>
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>I am Surendra Kumar working in Halonix Technologies Pvt. Ltd through YOMA. I have been associated with YOMA since April 2018. My experience of working with YOMA has been good. Through YOMA's Proanto app, I get my payslip every month easily. I would like to be in connection with YOMA in the future as well.</p>
               </div>

               <div className="testimonial-two-item">
                  <div className="author-description">                     
                     <div className="designation">
                        <h5>Harpreet Singh</h5>
                        <span>Halonix technologies Pvt. Ltd.</span>
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>I am Harpreet Singh working in Halonix Technologies Pvt. Ltd through YOMA Business. I have been associated with YOMA since 2018. My experience with YOMA has been great. I do not face any problem as they resolve it at the right time. I would like to remain connected with YOMA in the coming times.</p>
               </div>
               </Slider>
            </div>
            </div>
         </div>

         <div className="wow fadeInLeft delay-0-2s col-sm-4">
          <div className="testimonial-item mpaj"> 
            <h3 className="h3themecolor">Success story</h3>
            <div className="testimonial-two-active">            
               <div className="testimonial-two-item">
                  <div className="author-description">                     
                     <div className="designation">
                        <h5>FMCG industry</h5>                        
                     </div>
                     <i className="fas fa-quote-right"></i>
                  </div>
                  <p>One of the leading cosmetic brands was facing a high attrition rate in a project. They were facing problems such as decreased productivity, declining profits, increased expense and so on.</p>
                  <p>We helped them identify the concerned areas of the SSRs and the working model. We proposed them the complete managed services which resulted in higher productivity, 15% reduction in attrition rates and more.</p>
               </div>

                
            </div>
            </div>
         </div>

      </div>
   </div>
</section>
<section className="contact-four pt-70 rpt-50 pb-70 rpb-70">
   <div className="container">
      <div className="contact-inner-four box-shadow p-35 rpx-25 br-5 bg-white">
         <div className="row">
            <div className="col-lg-7">
               <div className="contact-section-form px-15 rpx-0 rmb-50 wow fadeInLeft delay-0-2s animated animateleft">
                  <div className="section-title mb-20">
                     <h2>REQUEST A CALL BACK</h2>
                  </div>
                  
                  <form id="contactForm" className="contact-form" onSubmit={registerUser}>
                     <div className="row">
                        <div className="col-sm-6">
                           <div className="form-group">
                              <label htmlFor="name">Your Name</label>
                              <input type="text" id="name" name="name" className="form-control" placeholder="Name*" required=""/>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-group">
                              <label htmlFor="email">Your email address</label>
                              <input type="email" id="email" name="email" className="form-control" placeholder="Work Email/Email*" required=""/>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-group">
                              <label htmlFor="number">Phone No.</label>
                              <input type="text" id="number" name="number" className="form-control" placeholder="Phone No.*" required=""/>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-group">
                              <label htmlFor="number">Message</label>
                              <input type="text" id="message" name="message" className="form-control" placeholder="Message"/>
                           </div>
                        </div>
                        <div className="col-sm-12">
                           <div className="form-group">
                              <label htmlFor="service">Business Entity*</label>
                              <select id="service" name="leadsquared_mx_Business_Entity">
                                 <option value="YOMA Business Solutions" selected="">YOMA Business Solutions</option>
                              </select>
                           </div>
                        </div>
                        <div className="col-sm-12">
                           <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Send Message"/>
                           <div className="clearfix"></div>
                           <p id="showlabel" style={{ display: "none" }}></p>
                        </div>
                        
                     </div>
                  </form>
               </div>
            </div>
            <div className="col-lg-5">
               <div className="contact-image-number style-two bgs-cover overlay wow fadeInRight delay-0-2s animated homecontactbg">
                  <div className="contact-informations text-white">
                     <h3>Don't hesitate to contact us</h3>
                     <ul className="contact-info">
                        <li>
                           <i className="fas fa-phone-alt"></i>
                           <div className="content">
                              <span>Call Us</span>
                              <h5><a href="callto:+91 844 8188 503">+91 844 8188 503</a></h5>
                           </div>
                        </li>
                        <li>
                           <i className="fas fa-envelope"></i>
                           <div className="content">
                              <span>Write to Us</span>
                              <h5><a href="mailto:yoma.info@byldgroup.com">yoma.info@byldgroup.com</a></h5>
                           </div>
                        </li>
                        <li>
                           <i className="fas fa-clock"></i>
                           <div className="content">
                              <span>Office hours</span>
                              <h5>Mon-Fri:- 9:30 AM  - 6:30 PM</h5>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  )
}
