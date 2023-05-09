import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta name="description" content="" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Yoma Business Solutions | Staffing | BYLD Group</title>
          <link rel="icon" href="/favicon.png" />
          <meta name="google-site-verification" content="NLt2fLY-Zv4a3CTFZkpB45Mag6Muyi-aKAfBhzjAGKU" />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-29994810-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-29994810-1');
          `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.__lo_site_id = 314176;
              (function() {
              var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
              wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
              })();
          `,
            }}
          />

          {/* Global site tag (gtag.js) - Google Ads: 369687005 */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-369687005"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-369687005');
          `,
            }}
          />

          {/* <!-- Google tag (gtag.js) --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-YXKPZH4LLZ"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'G-YXKPZH4LLZ');
          `,
            }}
          />

          <script type="text/javascript" src="https://web-in21.mxradon.com/t/Tracker.js"></script>
          <script type="text/javascript">
            pidTracker('53539');
          </script>
          {/* LeadSquared Tracking Code End */}

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.__lo_site_id = 314178;
              (function() {
              var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
              wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
              })();

          `,
            }}
          />


          <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />

          <link rel="stylesheet" href="/assets/css/font-awesome-5.9.0.css" />

          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/flaticon.css" />

          <link rel="stylesheet" href="/assets/css/animate.css" />

          <link rel="stylesheet" href="/assets/css/slick.css" />

          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/globals.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var chatbot_id=12464;!function(){var t,e,a=document,s="smatbot-chatbot";a.getElementById(s)||(t=a.createElement("script"),t.id=s,t.type="text/javascript",t.src="https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz",e=a.getElementsByTagName("script")[0],e.parentNode.insertBefore(t,e))}();
          `,
            }}
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>


          <script
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "YOMA Business Solutions",
                "alternateName": "YOMA Multinational",
                "url": "https://www.yomabusinesssolutions.com/",
                "logo": "https://www.yomabusinesssolutions.com/assets/img/logo/yoma-logo.png",
                "sameAs": [
                  "https://www.facebook.com/YOMABusinessSolutions",
                  "https://twitter.com/Yomasolutions",
                  "https://www.instagram.com/yoma.business/",
                  "https://www.youtube.com/@YOMAbusinesssolutions",
                  "https://www.linkedin.com/company/yomabusinesssolutions/",
                  "https://in.pinterest.com/yomasolutions/",
                  "https://soundcloud.com/yoma-multinational",
                  "https://www.tumblr.com/yomamultinational",
                  "https://en.wikipedia.org/w/index.php?title=Special:Homepage&source=personaltoolslink&namespace=-1",
                  "https://github.com/yomabusinesssolutions",
                  "https://www.yomabusinesssolutions.com/"
                ]
              }
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/assets/js/jquery-3.6.0.min.js"></script>
          <script src="/assets/js/bootstrap.min.js"></script>
          <script src="/assets/js/appear.min.js"></script>
          <script src="/assets/js/slick.min.js"></script>
          <script src="/assets/js/jquery.magnific-popup.min.js"></script>
          <script src="/assets/js/isotope.pkgd.min.js"></script>
          <script src="/assets/js/wow.js"></script>
          <script src="/assets/js/script.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument