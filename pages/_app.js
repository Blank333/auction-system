import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
  return (
    <div>
    <Layout />
      <Head>
        <title>Apple Mart</title>
        <meta name="description" content="Apple Auctions for Himachal Pradesh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <Component {...pageProps} />

      <footer className='text-center my-4 py-2 bg-gray-100 w-screen'>
            Powered by caffiene
      </footer>

    </div>
  )
}


