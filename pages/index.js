import Head from 'next/head'
import Projects from '@/Home/Projects';
import Footer from '@/Global/Footer';
import Skills from '@/Home/Skills/Skills';

export default function Home() {
  return (
    <div className="absolute items-center justify-center w-full h-full">
      {/** Add link tags here for Home Page */}
      <Head>
        <title>Brendan Cheong&apos;ms Personal Website Portfolio</title>
        <meta name="description" content="Welcome to Brendan's Personal Website, Here you can find all my completed projects and details about me for potential employers" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      {/** <!-- Bio --> */}
      <main id="Brendan Bio"className="p-5 mt-12 space-y-4">
        <section id="Bio description" className="space-y-10">
          <div className="relative space-y-5 text-5xl font-poppins">
            <h1>Hi, I&apos;m</h1>
            <h1>Brendan</h1>
          </div>
          <h2 className="text-[16px] font-poppins w-11/12">
            Undergraduate in the National University of Singapore. Currently interested in
            full-stack web development and data analytics.
            This website showcases my work and the various skills that I have picked
            up through my never ending journey of learning new technologies.
          </h2>
        </section>
        
        <div id="external link to resume" className="flex flex-row space-x-1 text-base text-blue-500 underline font-poppins">
          <h3>
            Download Resume
          </h3>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
        </div>
      </main>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  )
}
