import React from 'react'

export default function Footer() {
    const registerUser = async event => {
        event.preventDefault()
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/yomamultinational/wp-json/contact-form-7/v1/contact-forms/14/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabelc").innerHTML = "Thank you for submitting your details.";

                    document.getElementById("showlabelc").style.display = "block";
                    window.setTimeout(function() {
                    //    window.location.href = "/thank-you-lp"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("your-email=" + event.target.fmail.value)

    }
  return (
    <>
    <footer className="main-footer footer-two bgs-cover text-white footerbg">
            <div className="container">
               
                <div className="footer-widget-area pt-85 pb-20">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget about-widget">
                                <div className="footer-logo mb-35">
                                    <a href="/"><img src="/assets/img/logo/yoma-logo.png" alt="Logo"/></a>
                                </div>
                                <div className="text">
                                    YOMA is in the HR industry for the last two decades and has been dedicatedly providing a comprehensive range of HR services and management consulting to all-sized businesses. In today’s dynamic and ever-changing business environment, it is imperative to understand the current needs of businesses. <a href="/about-us">Read more</a>
                                </div>                                
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="footer-widget link-widget ml-20 rml-0">
                                <h4 className="footer-title">OUR SOLUTIONS</h4>
                                <ul className="list-style-three">
                                    <li><a href="#">General Staffing</a></li>
                                    <li><a href="#">Industrial Staffing</a></li>
                                    <li><a href="#">Staff Augmentation</a></li>
                                    <li><a href="#">Managed Services</a></li>
                                    <li><a href="#">Shared Resource Program</a></li>
                                    <li><a href="#">Apprenticeship Program (NAPS)</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer-widget contact-widget mr-30 rmr-0">
                                <h4 className="footer-title">CONTACT US</h4>                                
                                <ul className="list-style-two">
                                    <li><i className="fas fa-map-marker-alt"></i>BYLD Group: <br></br>2nd and 3rd Floor, Plot No. 48, Sector - 44, Opp. EPF Regional Office Gurugram, Haryana - 122003</li>
                                    <li><i className="fas fa-envelope"></i> <a href="mailto:yoma.info@byldgroup.com">yoma.info@byldgroup.com</a></li>
                                    <li><i className="fas fa-globe"></i><a href="/">www.yomamultinational.com</a></li>
                                    <li><i className="fas fa-phone-alt"></i> <a href="callto:+91-8448188503">Associate helpline: +91 844 8188 503</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-widget newsletter-widget">
                                <h4 className="footer-title">NEWSLETTER</h4>
                                <p>Subscribe to our monthly newsletter to receive important updates, suitable for your company and people.</p>
                                <form id="footerformreset" method="post" onSubmit={registerUser}>
                                    <input type="email" name="fmail" placeholder="Your Email Address" required/>
                                    <button type="submit" value="submit"><i className="fa fa-location-arrow"></i></button>
                                    <label id="submitbuttonform"></label>
                                </form>
                                <p id="showlabelc" style={{ display: "none" }}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-inner pt-15">
                        <div className="social-style-one mb-10">
                            <a target="_blank" href="https://www.facebook.com/YOMABusinessSolutions"><i className="fab fa-facebook-f"></i></a>
                            <a target="_blank" href="https://twitter.com/YomaSolutions"><i className="fab fa-twitter"></i></a>
                            <a target="_blank" href="https://www.linkedin.com/company/yoma-multinational-solutions/"><i className="fab fa-linkedin-in"></i></a>
                            <a target="_blank" href="https://www.youtube.com/user/yomamultinational"><i className="fab fa-youtube"></i></a>
                            <a target="_blank" href="https://www.instagram.com/yoma.business"><i className="fab fa-instagram"></i></a>
                        </div>
                        <p>Copyright 2022 Yomamultinational All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
