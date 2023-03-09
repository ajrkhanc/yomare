import Link from 'next/link'
import Head from 'next/head'
import  moment from 'moment'

export async function getServerSideProps() {
    const res = await fetch('https://yomablogs.vercel.app/api/posts')
    const posts = await res.json()

    const cat = await fetch('https://yomablogs.vercel.app/api/categories')
    const cats = await cat.json()

    return {
      props: {
        posts, 
        cats,    
      },
    }
  }

export default function index({posts, cats}) {

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/yomamultinational/wp-json/contact-form-7/v1/contact-forms/14/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                       window.location.href = "/thank-you-lp"
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

    
        <Head>
        <title>Blogs - Yomamultinational</title>
        <meta name="description" content="1800 102 1345 info@yomamultinational.com Home ABOUT US Who We Are Mission, Vision & Values Life at Yoma Solutions General Staffing Industrial Staffing Staff Augmentation Managed Services Shared Resource Program Apprenticeship Program (NAPS) Client Corner Client Testimonials Our Clientele Client Login Scrap Book Associate Corner Job Openings Get a Job Associate Login Become A Partner Careers … Continue reading Best Staff Augmentation Services Provided by Top Staffing Companies in India"/>
        </Head>

        <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
      <script
            dangerouslySetInnerHTML={{
              __html: `
              $(function() {
               var overlay = $('<div id="overlay"></div>');
               overlay.show();
               overlay.appendTo(document.body);
               $('.popup').show();
               $('.close').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
               $('.x').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
             });
          `,
            }}
          />


         <div class='popup wow fadeInUp delay-0-2s animated animateUP'>
            <div class='cnt223'>
            <a href='' class='close popupclose'>X</a>
               <div className='popupinner'>
                  <div className='popupimg text-center'>
                     <img src="/assets/img/popupimg.png"/>
                     <h3>YOU CAN’T LEARN ANYTHING FROM A POP-UP.</h3>
                     <p>But you can learn a lot from insightful matters by our experts by getting those delivered to your inbox every month.</p>
                  </div>
                  <div className='popupform'>
                  <form id="contactForm" onSubmit={registerUser}>
                        <div className="row clearfix justify-content-center">                              
                              <div className="col-sm-12">
                                 <div className="form-group mb-0">                                                                                            
                                    <input type="email" id="EmailAddress" name="fmail" className="form-control popupsus" placeholder="Subscribe Us*" required />
                                 </div>
                              </div>

                              <div className="col-sm-12">
                              <div className="form-group mb-0">
                                 <input id="submitbuttonform" type="submit" className="theme-btn btnwidth fullbtn" value="Send Message"/>
                              </div>
                              <div className="clearfix"></div>
                              <p id="showlabel" className="submitpopup" style={{ display: "none" }}></p>
                        </div>
                        
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>


        <section className="page-banner bgs-cover overlay pt-50 blogpagebg">
            <div className="container">
                <div className="banner-inner">
                    <h1 className="page-title">Blog</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                            <li className="breadcrumb-item active">Blog</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>

        <section className="pt-40 pb-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    <div className="row">
                     
                       {
                         posts.map((getpost)=>{
                          return(
                          <div className="col-sm-6">
                          <div className="news-item wow fadeInUp delay-0-2s">
                              <div className="image">
                              <img src={getpost.ImageURL} alt={getpost.ImageAlt}/>
                              </div>
                              <div className="news-content">                                  
                                  <h4><a href={`/blogs/${getpost.posturl}`}>{getpost.Title}</a></h4>
                                  <ul className="post-meta-item">                                      
                                      <li>
                                          <i className="fas fa-user"></i>
                                          <a href="#">By - {getpost.Author}</a>
                                      </li>
                                      <li>
                                          <i className="fas fa-calendar-alt"></i>                                          
                                          {moment(getpost.ModifiedDate).format('MMMM DD Y')}
                                      </li>
                                  </ul>
                              </div>
                              {/* <div className="news-author hide-author">
                                  <img src="" alt="Authro"/>
                                  <span className="posted-by">
                                      By <a href="#"></a>
                                  </span>
                              </div> */}
                          </div>
                      </div>
                          );
                         })                    
                       }     
                                       
                    
                </div>
                    </div>
                    <div className="col-lg-4 col-sm-9">
                       <div className="blog-sidebar">                            
                            <div className="widget widget-recent-post wow fadeInUp delay-0-4s">
                                <h3 className="widget-title">Recent blogs</h3>
                                <div className="widget-news-wrap">
                                   
                                {
             posts.slice(0,5).map((getpost)=>{             
                        return(  
                                    <div className="widget-news-item">
                                        <img src={getpost.ImageURL} alt={getpost.ImageAlt}/>
                                        <div className="widget-news-content">
                                            <h5><Link href={`/blogs/${getpost.posturl}`}><a>{getpost.Title}</a></Link></h5>
                                            <span className="date">{getpost.ModifiedDate}</span>
                                        </div>
                                    </div>
                                    );                 
                                  })
                              }
                                    
                                </div>
                            </div>
                            
                           <div className="widget widget-category wow fadeInUp delay-0-2s">
                                <h3 className="widget-title">Categories</h3>
                                <ul className="list-style-two">
                                     
                                    {
                                      cats.map((getcats)=>{
                                        return(
                                          <li><a href={`/category/${getcats.Caturl}`}>{getcats.Name}</a></li>
                                        );
                                      })
                                    }
                                    
                                </ul>
                            </div>
                            
                            {/* <div className="widget widget-recent-post wow fadeInUp delay-0-4s">
                                <h3 className="widget-title">Upcoming Events</h3>
                                <div className="widget-news-wrap">
                                   
                                    
                                    <div className="widget-news-item">
                                        <img src="/assets/img/planner.png" alt=""/>
                                        <div className="widget-news-content">
                                            <h5><Link  href="/events"><a>Executive Showcase Event</a></Link></h5>
                                            <span className="date"><Link  href="/events"><a>14th Oct - 2022</a></Link></span>
                                        </div>
                                    </div>
                                    
                                    <div className="widget-news-item">
                                        <img src="/assets/img/planner.png" alt=""/>
                                        <div className="widget-news-content">
                                            <h5><Link  href="/events"><a>Executive Showcase Event</a></Link></h5>
                                            <span className="date"><Link  href="/events"><a>11th Nov - 2022</a></Link></span>
                                        </div>
                                    </div>
                                    
                                    <div className="widget-news-item">
                                        <img src="/assets/img/planner.png" alt=""/>
                                        <div className="widget-news-content">
                                            <h5><Link  href="/events"><a>Executive Showcase Event</a></Link></h5>
                                            <span className="date"><Link  href="/events"><a>9th Dec - 2022</a></Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            
                            
                            
                            {/* <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                                <h3 className="widget-title">Category</h3>
                                <div className="tags">
                                    <a href="#">Cleaning</a>
                                    <a href="#">Business</a>
                                    <a href="#">Booking</a>
                                    <a href="#">car</a>
                                    <a href="#">House</a>
                                    <a href="#">Apartment</a>
                                    <a href="#">Washing</a>
                                    <a href="#">Agency</a>
                                    <a href="#">Listing</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
         
    </>
  )
}

