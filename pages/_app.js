import '../styles/globals.css'; // delete later
import 'tailwindcss/tailwind.css';
import Layout from '@/Global/Layout';
import Head from 'next/head'
import Navbar from '@/Global/Navbar';

function MyApp({ Component, pageProps }) {
  return (
  
  <>
    <div className="min-h-screen transition duration-500 ease-in-out min-w-screen">
      <div className="container relative mx-auto">
        <Head>
          <title>Brendan&apos;s Portfolio - Aspiring Fullstack Developer and Data Analyst</title>
          <meta name="description" content="Welcome to Brendan Cheong Ern Jie's Portfolio Website! Check out my projects and skills here!"/>
          <meta name="author" content="Brendan Cheong Ern Jie"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
          <meta name="keywords" content="Full-stack web development, Data Analytics, HTML, CSS, Javascript, Brendan Cheong, Brendan, Brendan Cheong Ern Jie, Java, Python, web developer, frontend, backend, fullstack, software developer, data analyst, data engineer, programmer, web developer, app developer, Brendan"/>
          <meta name="type" content="application"/>
          <meta name="url" content="http://www.brendancheong.vercel.app"/>
        </Head>
        <Navbar/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </div>
      </div>
  </>
  )
}

export default MyApp
