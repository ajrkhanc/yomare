import Link from "next/link";
import Head from "next/head";

export default function IndustrialStaffing() {
     
    return (
      <> 
      
        <Head>
        <title>Apprenticeship Program | Apprenticeship | YOMA Business</title>
        <meta name="description" content="Gain a competitive advantage in workforce management through the HR solutions of YOMA and get access to the best manpower supply."/>
        </Head>
        
        <section>
        <img className="img100" src="/assets/img/banner/apprenticeship-program-banner.jpg"/>
        </section>

        <section className="about-section pt-50 pb-30 bgdarkyoma">
            <div className="container">
                <div className="row align-items-center">                    
                    <div className="col-lg-6">
                        <div className="about-content wow fadeInRight delay-0-2s animated animateright">                        
                        <p className="text-justify">
                        India, as one of the youngest nations around the world, accounts for more than 62% of its population in the working-age group (15-59 years), and more than 54% of its total population below 27 years of age. This represents a great opportunity as well as a huge challenge when it comes to the upskilling of these generations. We strive to enhance the skills of thousands of young minds and empower them under our <strong>apprenticeship program</strong> as one of the best <strong>temporary staffing</strong> services.
                        </p>                        
                        <p className="text-justify themcolor">
                        Every year, out of 15 million youth entering the job market, over 75% are not job ready!*
                        </p>
                        <p className="text-justify">
                        This stark difference is due to a lack of the required skills (technical or interpersonal). Additionally, the unemployed segments of the working-age groups and conventionally educated youth are the two major challenges that have to be addressed.
                        </p>
                        <p className="text-justify">
                        So far, our corporate staffing services have helped hundreds of apprentices to learn vital work skills and become job-ready, while the other few hundreds are in the process of acquiring those skills across sectors.
                        </p>
                        <a className="themcolor" target="_blank" href="https://www.abgus.org/content.php?pid=7#:~:text=Every%20year%2C%20out%20of%2015,of%20technical%20and%20soft%20skills."> ABGUS</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="wow fadeInLeft delay-0-2s animated animateleft text-center">
                        <img src="/assets/img/temporary-staffing.png" alt="About"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="about-section pt-50 pb-20">
            <div className="container">
                <div className="row align-items-center">                    
                    <div className="col-lg-12">
                        <div className="wow fadeInLeft delay-0-2s animated animateleft text-center">
                        <h2 className="mainh1"><span>Benefits </span>for apprentices</h2>                        
                        <img src="/assets/img/apprenticeship-program-info.png" alt="About"/>
                        <p className="themcolor pt-30">We support the Indian government’s National Apprenticeship Promotion Scheme (NAPS), including all the endeavors <br></br>like the ‘skill India’ scheme towards addressing the aforementioned challenges.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <section className="pt-20 pb-50">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12 coleql2 pt-20 pb-20">
                         <div>
                             <h3 className="h3themecolor d-none">Here’s how YOMA’s Temporary Staffing Benefits Apprenticeship Program</h3>
                             <p className="text-justify"><strong>Temporary staffing</strong> enhances skilled workforce and provides apprentices with real working opportunities. This allows them to gain exposure to the latest technologies, get a competitive advantage with advanced machinery and equipment, industry-specific training, and gain expertise by learning more about their field.</p>
                             <p className="text-justify">And the best part is that they get trained under the supervision of experienced professionals. This helps in being industry-ready and getting immediately active to grasp the role of employees.</p>
                             
                             <p className="text-justify">Our <b>apprenticeship program</b> is very different from internships because most of the internships are unpaid, and their experience doesn’t even count. Whereas, apprenticeship gets you the same experience as a full-time employee.</p>
                             <p className="text-justify">So, given our long-term establishment in the <b>corporate staffing</b> industry, we assure you of the best feasible solutions.</p>
                         </div>
                     </div>                     
                  </div>
               </div>
            </section>   

            <section className="pb-50 pt-40 bg-lighter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="section-title text-center  pb-20">
                            <h2 className="mainh1"><span>Our </span>affiliations include the following:</h2> 
                        </div>
                    </div>
                    <div className="col-sm-3 awardbox">
                        <div className="awarimgbox"><img src="/assets/img/apprenticeshiplogo1.jpg"/></div>
                    </div>
                    <div className="col-sm-3 awardbox">
                        <div className="awarimgbox"><img src="/assets/img/apprenticeshiplogo2.jpg"/></div>
                    </div>
                    <div className="col-sm-3 awardbox">
                        <div className="awarimgbox"><img src="/assets/img/apprenticeshiplogo3.jpg"/></div>
                    </div>
                    <div className="col-sm-3 awardbox">
                        <div className="awarimgbox"><img src="/assets/img/apprenticeshiplogo4.jpg"/></div>
                    </div>                   
                </div>
            </div>
        </section>      
 
      </>
    )
  }