import Layout from '../components/Layout/Layout'
import GenericLP from '../components/GenericLP/Layout'
import '../styles/globals.css'
import { useRouter } from "next/router";
import Head from 'next/head'

function MyApp({ Component, pageProps, router }) {


  if (router.pathname.startsWith('/generic-lp')) {

    return (
        <GenericLP>
            <Component {...pageProps} />
        </GenericLP>
    )

}

else {
  const router = useRouter();
  const canonicalUrl = (`https://yomabusinesssolutions.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  return (
    <Layout>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        </Head>
    <Component {...pageProps} />
    </Layout>
  )
}
}

export default MyApp
