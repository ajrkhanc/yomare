import Link from "next/link"
import Head from "next/head"
import moment from 'moment'

// export async function getServerSideProps() {
//     const res = await fetch('https://yoma-admin.herokuapp.com/api/posts')
//     const detailposts = await res.json()
//     const paths = detailposts.map((post) => ({
//       params: {
//            blogsSlug: post.posturl,
//            leftsidebar: detailposts
//         },
//     }))
//     return { paths, fallback: false }
//   }



export async function getServerSideProps(context) {
    const post5 = await fetch('https://yomablogs-np65m.ondigitalocean.app/api/posts')
    const posts5 = await post5.json()

    const cat = await fetch('https://yomablogs-np65m.ondigitalocean.app/api/categories')
    const cats = await cat.json()


    const posturl = context.params.blogsSlug;
    const res = await fetch(`https://yomablogs-np65m.ondigitalocean.app/api/post/${posturl}`)
    const posts = await res.json()

    const getfeedback = await fetch(`https://yomablogs-np65m.ondigitalocean.app/api/posts/feed/${posturl}`)
    console.log(getfeedback)
    const postfeedback = await getfeedback.json()

    return {
        props: {
            posts,
            posts5,
            cats,
            postfeedback
        },
    }
}


const submitFeedback = async (event) => {
    event.preventDefault();
    const url = window.location.href
    const findparams = url.split('/')
    // console.log(findparams[3])
    const name = event.target.name.value;
    const email = event.target.email.value;
    const feedback = event.target.comments.value;
    const posturl = findparams[3];
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://yomablogs-np65m.ondigitalocean.app/api/feedback/');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('feedback=' + feedback + '&name=' + name + '&email=' + email + '&postslug=' + posturl);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            document.getElementById("feebackform").reset()
            document.getElementById("response").innerHTML ="Feedback Submitted"

            setTimeout(function(){
                document.getElementById("response").innerHTML =""
            }, 3000)
        }
    }

    xhr.onerror = function () {
        console.log('error');
    }
};

export default function singleblog({ posts, posts5, cats, postfeedback }) {

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
                <title>{posts.Title}</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@YomaSolutions" />
                <meta name="twitter:creator" content="@YomaSolutions" />
                <meta name="twitter:title" content={posts.Title} />
                <meta name="twitter:description" content="" />
                <meta name="twitter:image" content={posts.ImageURL} />
                <meta property="twitter:url" content={posts.posturl} />

                {/* Open Graph / Facebook */}
                <meta property="og:locale" content="en-in" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="YOMABusinessSolutions" />
                <meta property="og:title" content={posts.Title} />
                <meta property="og:description" content="" />
                <meta property="og:image" name="image" content={posts.ImageURL} />
                <meta property="og:url" content={posts.posturl} />

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

            <section className="pt-40 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-content pb-95 rpb-75 pr-15 rpr-0 singleblog">
                                <div className="image wow fadeInUp delay-0-2s">
                                    <img src={posts.ImageURL} alt={posts.ImageAlt} />
                                </div>
                                <div className="blog-header">
                                    <ul className="post-meta-item mr-15">
                                        <li>
                                            <i className="far fa-user"></i>
                                            <a href="#" rel="bookmark">{posts.Author}</a>
                                        </li>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <a>{moment(posts.ModifiedDate).format('DD MMMM Y')}</a>
                                        </li>
                                    </ul>
                                    {/* <div className="social-style-one">
                                    <span>Share Now</span>
                                    <a href="http://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="http://twitter.com/"><i className="fab fa-twitter"></i></a>
                                    <a href="https://google.com/"><i className="fab fa-google-plus-g"></i></a>
                                </div> */}
                                </div>
                                <h3>{posts.Title}</h3>
                                <div className="bloglinkh" dangerouslySetInnerHTML={{ __html: posts.Content }}>

                                </div>
                                {/* <div className="blog-footer mb-40">
                                 <div className="popular-tags mb-15">
                                    <b>Popular Tag :</b> 
                                    <a href="#">IT Services</a> <a href="#">Technology</a> <a href="#">Services</a>
                                </div>
                                <div className="social-style-two">
                                    <span>Share</span>
                                    <a href="http://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="http://twitter.com/"><i className="fab fa-twitter"></i></a>
                                    <a href="https://google.com/"><i className="fab fa-google-plus-g"></i></a>
                                    <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div> */}

                            <div className="comments-wrap mt-55 wow fadeInUp delay-0-2s animated">
                                <h3 className="comment-title mb-55">Comments</h3>                                
                                {
                                postfeedback.map((postfeedback)=>{
                                return(
                                <div className="comment-item">
                                    <div className="author-image">
                                        <img src="/assets/img/icon/commentuser.png" alt="Author"/>
                                    </div>
                                    <div className="comment-details">
                                        <div className="name-date">
                                            <h5>{postfeedback.user}</h5>
                                            <span className="date">{moment(postfeedback.PublishDate).format('DD MMMM Y')}</span>
                                        </div>
                                        <p>{postfeedback.comment}</p>
                                        {/* <a href="#" className="reply">Reply Commets</a> */}
                                    </div>
                                </div>
                                )
                                })
                                }
                            </div>

                            <div className="comment-form-wrap mt-60 wow fadeInUp delay-0-2s animated">
                                <h3 className="comment-title mb-55">Share FeedBack</h3>
                                <form id="feebackform" onSubmit={submitFeedback} className="comment-form">
                                    <div className="row clearfix justify-content-center">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label for="full-name"><i className="far fa-user"></i></label>
                                                <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label for="email"><i className="far fa-envelope"></i></label>
                                                <input type="email" id="email" name="email" className="form-control" placeholder="Your Email" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label for="comments"><i className="fas fa-pencil-alt"></i></label>
                                                <textarea name="comments" id="comments" className="form-control" rows="4" placeholder="Write Message" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                            <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Submit Feedback" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p class="feedbackcolor" id="response"></p>
                            </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-9">
                            <div className="blog-sidebar">
                                <div className="widget widget-recent-post wow fadeInUp delay-0-4s">
                                    <h3 className="widget-title">Recent blogs</h3>
                                    <div className="widget-news-wrap">

                                        {
                                            posts5.slice(0, 5).map((getpost) => {
                                                return (
                                                    <div className="widget-news-item">
                                                        <img src={getpost.ImageURL} alt={getpost.ImageAlt} />
                                                        <div className="widget-news-content">
                                                            <h5><a href={`/blogs/${getpost.posturl}`}>{getpost.Title}</a></h5>
                                                            <span className="date">{moment(getpost.ModifiedDate).format('DD MMMM Y')}</span>
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
                                            cats.slice(0, 12).map((getcats) => {
                                                return (
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
                                            <img src="/assets/img/planner.png" alt="" />
                                            <div className="widget-news-content">
                                                <h5><Link href="/events"><a>Executive Showcase Event</a></Link></h5>
                                                <span className="date"><Link href="/events"><a>14th Oct - 2022</a></Link></span>
                                            </div>
                                        </div>

                                        <div className="widget-news-item">
                                            <img src="/assets/img/planner.png" alt="" />
                                            <div className="widget-news-content">
                                                <h5><Link href="/events"><a>Executive Showcase Event</a></Link></h5>
                                                <span className="date"><Link href="/events"><a>11th Nov - 2022</a></Link></span>
                                            </div>
                                        </div>

                                        <div className="widget-news-item">
                                            <img src="/assets/img/planner.png" alt="" />
                                            <div className="widget-news-content">
                                                <h5><Link href="/events"><a>Executive Showcase Event</a></Link></h5>
                                                <span className="date"><Link href="/events"><a>9th Dec - 2022</a></Link></span>
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

            {/* <div className="container">
                <form id="feebackform" onSubmit={submitFeedback}>
                    <input type="text" name="name" placeholder="Name" />
                    <br />
                    <textarea name="comments" placeholder="Share Your FeedBack" required></textarea><br />
                    <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Send Message" />
                </form>

                <p id="response"></p>
            </div> */}
        </>
    )
}
