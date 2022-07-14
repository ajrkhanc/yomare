import Link from "next/link"
import Head from "next/head"

export default function CurrentOpenings(){
    return(
        <>
        <Head>
         <title>CURRENT OPENINGS - Yomamultinational</title>
         <meta name="description" content="1800 102 1345 yoma.info@byldgroup.com Home ABOUT US Who We Are Mission, Vision & Values Life at Yoma Solutions General Staffing Industrial Staffing Staff Augmentation Managed Services Shared Resource Program Apprenticeship Program (NAPS) Client Corner Client Testimonials Our Clientele Client Login Scrap Book Associate Corner Job Openings Get a Job Associate Login Become A Partner Careers … Continue reading"/>
      </Head>

        <section>
          <img className="img100" src="/assets/img/banner/current-openings.jpg"/>
        </section>
        
        <section className="what-we-do bg-lighter pt-40 rpt-40 pb-40 rpb-30">
            <div className="container">
                <div className="section-title text-center mb-35">
                <h2 className="mainh1"><span>Rewards</span> and incentives</h2>
                <h4 className="h3themecolor">Mail your resume at <a href="mailto:hr@yomamultinational.com">hr@yomamultinational.com</a></h4>
                <h3 className="h3themecolor">Position information</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12">
                        <div className="feature-item wow fadeInUp delay-0-2s animated animateUP">                       
                           <table className="table table-bordered">
                                <tbody>
                                  <tr>
                                    <td>Department</td>
                                    <td>IT</td>
                                  </tr>
                                  <tr>
                                    <td>Function</td>
                                    <td>IT/Dotnet development</td>
                                  </tr>
                                  <tr>
                                    <td>Designation</td>
                                    <td>Junior Dotnet developer/Dotnet developer</td>
                                  </tr>
                                  <tr>
                                    <td>New/existing position</td>
                                    <td>Existing</td>
                                  </tr>
                                  <tr>
                                    <td>Job type (part time/full time)</td>
                                    <td>Full time</td>
                                  </tr>
                                  <tr>
                                    <td>Total No. of vacancies</td>
                                    <td>1-2</td>
                                  </tr>
                                  <tr>
                                    <td>Location</td>
                                    <td>Across the India but ready to move gurgaon if needed</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                        </div>
                    </div>
            
                </div>
            </div>
            </section>
            
            
            <section className="pt-50 pb-10">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12 coleql2">
                         <div className="pb-20 pt-10">
                             <h3 className="h3themecolor">Functions / day to day activities:</h3>
                             <ul className="list-style-three mt-15">
                                <li>Good knowledge of Dotnet core programming, SQL server, MVC and should be a good debugger</li>
                                <li>Write optimized and clean code</li>
                                <li>Should be aware of SDLC and good in unit testing</li>
                                <li>Interested in new learning</li>
                                <li>Write SP and SQL queries.</li>
                                <li>Aware of different design patterns and DI</li>
                                <li>Should be a good team contributor and should be task oriented</li>
                                <li>Able to handle UI,jquery and different UI tools</li>
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
                        <p className="themcolor">Mail your resume at <a href="mailto:hr@yomamultinational.com">hr@yomamultinational.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}