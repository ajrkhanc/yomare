import Link from 'next/link'
import React from 'react'

export default function Header() {
    
  return (
    <>
<header className="main-header header-six">
            <div className="header-top-wrap bg-blue py-10">
                <div className="container">
                    <div className="header-top text-white ">
                        <div className="top-left">
                            <ul>
                                <li>Call Us: <a href="callto:18001021345"> 1800 102 1345</a></li>
                                <li>Email Us: <a href="mailto:yoma.info@byldgroup.com">yoma.info@byldgroup.com</a></li>
                            </ul>
                        </div>
                        <div className="top-right">
                            <div className="office-time">
                                <i className="far fa-clock"></i><span>09:30 am - 06:30 pm</span>
                            </div>
                            <div className="social-style-one">
                                <a target="_blank" href="https://www.facebook.com/YOMABusinessSolutions"><i className="fab fa-facebook-f"></i></a>
                                <a target="_blank" href="https://twitter.com/YomaSolutions"><i className="fab fa-twitter"></i></a>
                                <a target="_blank" href="https://www.linkedin.com/company/yoma-multinational-solutions/"><i className="fab fa-linkedin-in"></i></a>
                                <a target="_blank" href="https://www.youtube.com/user/yomamultinational"><i className="fab fa-youtube"></i></a>
                                <a target="_blank" href="https://www.instagram.com/yoma.business"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           
            <div className="header-upper">
                <div className="container clearfix">
                    <div className="header-inner d-flex align-items-center">
                        <div className="logo-outer">
                            <div className="logo">
                                <a href="/"><img src="/assets/img/logo/yoma-logo.png" alt="Logo" title="Logo"/></a>
                            </div>
                        </div>

                        <div className="nav-outer clearfix d-flex align-items-center d-none">
                           
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                    <div className="mobile-logo py-15">                                   
                                       <a href='/'><img src="/assets/img/logo/yoma-logo.png" alt="Logo" title="Logo"/></a>                                    
                                    </div>

                                    
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                <div className="navbar-collapse collapse clearfix">
                                <ul className="navigation clearfix">
                                        <li className="">
                                            <a href="/">HOME</a>                                            
                                        </li>
                                        <li className="dropdown">
                                            <a href="/about-us">ABOUT US</a>
                                            <ul>
                                                <li><a href="/about-us/#whowewre">Who We Are</a></li>
                                                <li><a href="/about-us/#missionvision">Mission, Vision & Values</a></li>
                                                <li><a href="/life-at-yoma">Life at Yoma</a></li>                                   
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">SOLUTIONS</a>
                                            <ul>
                                                <li><a href="/general-staffing">General Staffing</a></li>
                                                <li><a href="/industrial-staffing">Industrial Staffing</a></li>
                                                <li><a href="/staff-augmentation">Staff Augmentation</a></li>
                                                <li><a href="/managed-services">Managed Services</a></li>
                                                <li><a href="/shared-resources-program">Shared Resource Program</a></li>
                                                <li><a href="/apprenticeship-program">Apprenticeship Program (NAPS)</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="/client-corner">CLIENT CORNER</a>
                                            <ul>
                                                <li><a href="/client-corner/#clientspeak">Client Testimonials</a></li>
                                                <li><a href="/client-corner/#ourclientele">Our Clientele</a></li>
                                                <li><a target="_blank" href="https://client.yoma.co.in/">Client Login</a></li>
                                                <li><a href="/scrap-book">Scrap Book</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="/associate-corner">ASSOCIATE CORNER</a>
                                            <ul>
                                                <li><a href="/associate-corner#jobopening">Job Openings</a></li>                                                
                                                <li><a href="/get-job">Get a Job</a></li>
                                                <li><a target="_blank" href="https://associates.yoma.co.in/">Associate Login</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/become-a-partner-page">BECOME A PARTNER</a></li>                                  
                                        <li><a href="/current-openings">CAREERS</a></li>
                                        <li><a href="/blogs">BLOG</a></li>
                                        <li><a href="/contact-us">CONTACT US</a></li>
                                    </ul>
                                </div>
                            </nav>                            
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
    </>
  )
}
