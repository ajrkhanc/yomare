import Link from "next/link";
import Head from "next/head";

export default function index() {
     
    return (
      <>
  
      
        <Head>
        <title>ABOUT US - Yomamultinational</title>
        <meta name="description" content="1800 102 1345 yoma.info@byldgroup.com Home ABOUT US Who We Are Mission, Vision & Values Life at Yoma Solutions General Staffing Industrial Staffing Staff Augmentation Managed Services Shared Resource Program Apprenticeship Program (NAPS) Client Corner Client Testimonials Our Clientele Client Login Scrap Book Associate Corner Job Openings Get a Job Associate Login Become A Partner Careers … Continue reading | ABOUT US "/>
        </Head>
        
        <section>
        <img className="img100" src="/assets/img/banner/yoma-aboutus.jpg"/>
        </section>

        <section className="about-section pt-50 pb-20">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-shape rmb-70 wow fadeInLeft delay-0-2s animated animateleft">
                        <img src="/assets/img/about-us.png" alt="About"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content wow fadeInRight delay-0-2s animated animateright">
                        <div className="section-title">                            
                            <h2 className="mainh1"><span>About</span> Us</h2>
                        </div>
                        <p className="text-justify">
                        Founded on an innovative idea that every small or large-scaled business should run like a fortune 500 company, we introduced technology-driven HR services that work with clients all the way. With an industry-leading suite of HR outsourcing services that are backed by cutting-edge technology, we provide one-stop-solution to the following-
                        </p>
                        <img src="/assets/img/banner/ab-inf.png"/>
                        <p className="text-justify">
                        Our application-based, outsourcing, and HR solutions are paired with unparalleled service and support that helps in managing recruitment, training, payrolls, payments and automates complete employee lifecycle management through a single hr management software. We can fulfill your need for third-party payroll companies with ease. Due to our seamless and exceptional services, we rank amongst the top payroll software companies in India. Though we are a young company, yet, we have quite an established and remarkable presence across 300 + locations in the country and working with 150+ renowned organizations in India. We have emerged as the pioneers of people, technology, and payments services, all under one roof.
                        </p>
                         
                        </div>
                    </div>
                </div>
            </div>
         </section>

         <section className="about-section pt-50 pb-30" id="whowewre">
            <div className="container">
                <div className="row align-items-center">                    
                    <div className="col-lg-6">
                        <div className="about-content wow fadeInRight delay-0-2s animated animateright">
                        <div className="section-title">                            
                            <h2 className="mainh1"><span>Who</span> Are We</h2>
                        </div>
                        <p className="text-justify">
                        YOMA has been in the HR industry for the last two decades and has been dedicatedly providing a comprehensive range of HR services and management consulting to all-sized businesses. In today’s dynamic and ever-changing business environment, it is imperative to understand the current needs of businesses. We adopt a comprehensive yet tiered approach to provide the best HR outsourcing services to our clients.
                        </p>                        
                        <p className="text-justify">
                        Rapidly growing in the recruitment and staffing sector, we have created a strong position, as one of the influential companies in this sector, and have won prestigious long-term contracts against our local and international counterparts.
                        </p>
                         
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-image-shape wow fadeInLeft delay-0-2s animated animateleft text-center">
                        <img src="/assets/img/who-we-arec.png" alt="About"/>
                        </div>
                    </div>
                </div>
            </div>
         </section>

         <section className="what-we-do bg-lighter pt-50 rpt-40 pb-40 rpb-30">
            <div className="container">
                <div className="section-title text-center mb-65">
                <h2 className="mainh1"><span>YOMA </span> Staffing Services</h2> 
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-6">
                        <div className="feature-item wow fadeInUp delay-0-2s animated animateUP">
                        <Link href="/general-staffing"><a className="feature-btn"><i className="fas fa-long-arrow-alt-right"></i></a></Link>
                        <div className="icon">
                            <img className="imgicon70" src="/assets/img/icon/general-staffing.png" />
                        </div>
                        <div className="feature-content">
                            <h5>General Staffing</h5>
                            <p>We provide scalability in operating a larger volume of temporary staffing..</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="feature-item wow fadeInUp delay-0-4s animated animateUP">
                        <Link href="/industrial-staffing"><a className="feature-btn"><i className="fas fa-long-arrow-alt-right"></i></a></Link>
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/industrial-staffing.png" />
                        </div>
                        <div className="feature-content">
                            <h5>Industrial Staffing</h5>
                            <p>We have expertise in hiring reliable and experienced laborers for all...</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                        <Link href="/staff-augmentation"><a className="feature-btn"><i className="fas fa-long-arrow-alt-right"></i></a></Link>
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/staff-augmentation.png" />
                        </div>
                        <div className="feature-content">
                            <h5>Staff Augmentation</h5>
                            <p>We work on a sanctioned fixed budget finalized for the project...</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                        <Link href="/managed-services"><a className="feature-btn"><i className="fas fa-long-arrow-alt-right"></i></a></Link>
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/manage-services.png" />
                        </div>
                        <div className="feature-content">
                            <h5>Managed Services</h5>
                            <p>We simplify the highly complex functions of staffing, technology...</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                        <Link href="/shared-resources-program"><a className="feature-btn"><i className="fas fa-long-arrow-alt-right"></i></a></Link>
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/shared-resource-program.png" />
                        </div>
                        <div className="feature-content">
                            <h5>Shared Resource Program</h5>
                            <p>With shared resources model, we enable companies to deploy more...</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="feature-item wow fadeInUp delay-0-6s animated animateUP">
                        <Link href="/apprenticeship-program"><a className="feature-btn"><i className="fas fa-long-arrow-alt-right"></i></a></Link>
                        <div className="icon">
                        <img className="imgicon70" src="/assets/img/icon/apprenticeship-program.png" />
                        </div>
                        <div className="feature-content">
                            <h5>Apprenticeship Program (NAPS)</h5>
                            <p>We support the Indian government’s National Apprenticeship Promotion...</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12 text-center">
                       <p>We also represent some of the biggest and the most respected training & consulting companies in India like</p>
                       <p className="themcolor">Blanchard<sup>®</sup> India, VitalSmarts<sup>®</sup> India, InsideOut Development, BYLD Group, Everything DiSC<sup>®</sup> Five Behaviors<sup>®</sup>, Eagle’s Flight™ etc.</p>
                    </div>                   
                </div>
            </div>
            </section>

            <section className="pt-50 pb-50">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-6 coleql1">
                         <div>
                             <h3 className="h3themecolor">YOMA Multinational – Get Access to Top HR Outsourcing Services</h3>
                             <p>YOMA’s HR outsourcing services are a written plan of action that highlights how a company will successfully discover, recruit, and employ qualified people to fill available jobs.</p>
                             <h5>Advantages of availing HR outsourcing services of YOMA:</h5>
                             <ul className="list-style-three mt-15">
                                <li>Boost in productivity</li>
                                <li>Maintaining security standards</li>
                                <li>More possibilities and creativity</li>
                                <li>Improvement of financing and customer relations</li>
                                <li>Development of staff representation.</li>
                                <li>Establishing relationships with customers and financial institutions.</li>
                                <li>Individual accountability for one's conduct</li>                               
                             </ul>
                         </div>
                     </div>
                     <div className="col-sm-6 coleql2">
                         <div>
                             <h3 className="h3themecolor">Best HR Management Software for All Your Problems</h3>
                             <p>Our HR management software helps customers in maintaining full-time employees with the skills they need, ensuring that their operations are ready for the complete production and delivery of products and services.</p>
                             <h5>What’s the best way to get the best out of your employees?</h5>
                             <p>In helping them realize their true potential.</p>
                             <p>Our human resource software will help your people perform at maximum efficiency, and their potential will only rise from there.</p>
                             <p>YOMA’s HR solutions will leave no stone unturned in meeting your needs and requirements.</p>
                         </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="bg-lighter pt-30 pb-50" id="missionvision">
            <div className="container">
                <div className="section-title text-center pt-20 pb-70">
                    <h2 className="mainh1"><span>Mission, </span> vision, values</h2> 
                </div>
                <div className="work-progress-inner-two">
                    <div className="row justify-content-center">                        
                        <div className="col-lg-3 col-sm-6">
                            <div className="progress-item-two wow fadeInUp delay-0-2s animated animateUP">
                                <div className="icon">
                                <img className="imgicon70" src="/assets/img/icon/mission.png" />
                                </div>
                                <h3>Our mission</h3>
                                <p>“Our mission is to help organizations realize their full people potential by helping them find the right talent, train and develop the skills of their people, to maximize business and people results.”</p>
                                <span className="progress-step">01</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="progress-item-two wow fadeInUp delay-0-4s animated animateUP">
                                <div className="icon">
                                <img className="imgicon70" src="/assets/img/icon/vision.png" />
                                </div>
                                <h3>Our vision</h3>
                                <p>“We will be the most preferred and comprehensive provider of HR solutions to help our customers solve their business and people problems.”</p>
                                <span className="progress-step">02</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="progress-item-two wow fadeInUp delay-0-6s no-border mb-0 animated animateUP">
                                <div className="icon">
                                <img className="imgicon70" src="/assets/img/icon/values.png" />
                                </div>
                                <h3>Our values</h3>
                                <ul className="text-left spanc">
                                    <li> <span>Customer centricity – </span>We will provide an excellent experience to our internal and external customers in every interaction with them.</li>
                                    <li> <span> Accountability –  </span>&nbsp;We will hold each other accountable for the best business and financial results.</li>
                                    <li> <span> Reciprocity – </span> &nbsp;We will provide and solicit positive reciprocity in all dealings with our internal and external customers.</li>
                                    <li> <span> Entrepreneurship – </span>&nbsp;We will relentlessly pursue new opportunities – on day-to-day basis – to add value to our business. We will work smarter and achieve more with fewer resources.</li>
                                </ul>
                                <span className="progress-step">03</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pb-50 pt-40">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="section-title text-center  pb-20">
                            <h2 className="mainh1"><span>Awards </span> and recognition</h2> 
                            <p>We strive to become better in whatever we do. Look at our accomplishments as the pioneers of end-to-end employee management in India.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox"><img src="/assets/img/awa1.jpg"/></div>
                    </div>
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox"><img src="/assets/img/awa2.jpg"/></div>
                    </div>
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox"><img src="/assets/img/awa3.jpg"/></div>
                    </div>
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox"><img src="/assets/img/awa4.jpg"/></div>
                    </div>
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox"><img src="/assets/img/awa5.jpg"/></div>
                    </div>
                    <div className="col-sm-4 awardbox">
                        <div className="awarimgbox"><img src="/assets/img/awa6.jpg"/></div>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }