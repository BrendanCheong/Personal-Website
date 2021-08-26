import '../styles/globals.css'; // delete later
import 'tailwindcss/tailwind.css';
import Layout from '@/Global/Layout';
import Head from 'next/head'
import Navbar from '@/Global/Navbar';

function MyApp({ Component, pageProps }) {
  return (
  
    <>
    <Head>
      <title>Brendan&apos;s Website</title>
      <meta name="description" content="Welcome to Brendan Cheong Ern Jie's Portfolio Website!"/>
    </Head>
    <Navbar/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

export default MyApp
