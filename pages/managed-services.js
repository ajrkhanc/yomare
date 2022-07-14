import Link from "next/link";
import Head from "next/head";

export default function ManagedServices() {
     
    return (
      <>  
      
        <Head>
        <title>Best Managed Service Provider for Employee Management - YOMA</title>
        <meta name="description" content="YOMA is the best managed services provider for employee management that provides regular support and active resources to its clients and partners."/>
        <link rel="icon" href="/favicon.png" />
        </Head>
        <section>
        <img className="img100" src="/assets/img/banner/managed-services.jpg"/>
        </section>

        <section className="about-section pt-50 pb-20 bg-lighter">
            <div className="container">
                <div className="row align-items-center">                    
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-30">
                        <p className="text-center">
                        We strive to develop innovative yet simplistic solutions that can help the companies in their complete visibility and productivity needs. As a <strong>managed service provider</strong> who is client-centric, we are also built on the same belief.
                        </p>
                        <p className="text-center">
                        The solution focuses on providing end-to-end management of the GT and MT stores of FMCG and other consumer goods companies of all scales.
                        </p>
                            <h2 className="mainh1"><span>What </span> do we do?</h2> 
                        </div>
                        <div className="wow fadeInLeft delay-0-2s animated animateleft text-center">                        
                        <img src="/assets/img/managed-services-what-do-we.png" alt="About"/>
                        <p className="pt-30">Let us take care of all your staffing solutions services like operational and administrative work while you peacefully deal with your core <br></br>responsibilities and collaborate effectively with your revenue-generating departments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="about-section pt-50 pb-20 bgdarkyoma">
            <div className="container">
                <div className="row align-items-center">                    
                    <div className="col-lg-6">
                        <div className="about-content wow fadeInRight delay-0-2s animated animateright">                        
                        <p className="text-justify">
                        We are committed to recruiting, training, and deploying the best field force available at cost-effective prices. We take care of the compliance and complete productivity management of these recruits, so you can focus on bettering your products. We do not just provide fully adept manpower but with our in-house tech team, we enable them with best-in-class technology to support their in-store activities.
                        </p>                        
                        <p className="text-justify">
                        Our application and back-end portals are fully customizable to your needs of <strong>manpower recruitment, attendance management, payroll management,</strong> etc. We ensure the utmost transparency and real-time visibility through our daily reports on the execution and scorecards for each store and representative.
                        </p>
                        <p className="text-justify">
                        We have taken it one step further by providing a direct bank account payment option for your hardworking field force and your diligent store owners. We take pride in providing full transparency and accountability in the meticulous task of paying incentives too. We are happy to take care of all your store-related needs and help you make the best of the end-to-end visibility operations.
                        </p>                                             
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="wow fadeInLeft delay-0-2s animated animateleft text-center">
                        <img src="/assets/img/manpower.png" alt="About"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            <section className="pt-50 pb-20">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-6 coleql1">
                         <div>
                             <h3 className="h3themecolor">Here is why we are leading Managed Service Providers in India</h3>
                             <p className="text-justify">Temporary staffing has now become a critical hiring technique for all firms in India. The staff recruited are just for a decent time frame to fulfill the serious need of work.</p>
                             <h5>YOMA runs the show of being the top managed service provider because of the following reasons:</h5>
                             <ul className="list-style-three mt-15">
                                <li>We are adamant about enlisting, training, and dispatching the best field force possible at a fair cost.</li>
                                <li>We deal with the consistency and comprehensive usefulness of the board of these enlisted persons.</li>
                                <li>We don't just provide highly skilled workers; we also offer cutting-edge technology to aid their in-store operations through our in-house IT department.</li>                                                                                   
                             </ul>
                             <p className="text-justify">Our manpower recruitment best serves your needs when it comes to managing your employees at a micro-level.</p>
                         </div>
                     </div>
                     <div className="col-sm-6 coleql2">
                         <div>
                             <h3 className="h3themecolor">How Our Employee Management can Benefit You</h3>
                             <p className="text-justify">Along with managing your employees, our technology-driven platform provides <strong>manpower recruitment, attendance management, payroll management,</strong> etc. for ease of access. Here are the competitive advantages you’ll get:</p>
                             <ul className="list-style-three mt-15">
                                <li>Saving time</li>
                                <li>Cost-cutting</li>
                                <li>Hassle-less actions</li>
                                <li>Gain competitive advantage</li>
                             </ul>                             
                         </div>
                     </div>
                  </div>
               </div>
            </section>         

            <section className="pt-30 pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                        <p className="themcolor"><Link href="/contact-us"><a>Connect with us today!</a></Link></p>
                        </div>
                    </div>
                </div>
            </section>
 
      </>
    )
  }