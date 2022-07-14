import Layout from '../components/Layout/Layout'
import GenericLP from '../components/GenericLP/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {


  if (router.pathname.startsWith('/generic-lp')) {

    return (
        <GenericLP>
            <Component {...pageProps} />
        </GenericLP>
    )

}

else {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
}
}

export default MyApp
