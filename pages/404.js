import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const Custom404 = () => {
  return (
    <div>
       <Head>
          <title>ResumeBuilderAI | 404</title>
          <meta name="description" content="Unlock your career potential with ResumeBuilderAI. Effortlessly build a professional resume, tailor it to match job descriptions, and test its effectiveness. Start your journey to the perfect job today!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/resume-builder-logo.png" />
          <link rel="apple-touch-icon" href="/resume-builder-logo.png" /> 
          <link rel="canonical" href="https://theresumebuilderai.com/404"/>
          <meta property="og:type" content="article" />
           <meta property="og:title" content="ResumeBuilderAI" />
           <meta property="og:description" content="Unlock your career potential with ResumeBuilderAI. Effortlessly build a professional resume, tailor it to match job descriptions, and test its effectiveness. Start your journey to the perfect job today!" />
           <meta property="og:image" content="/resume-builder-logo.png" />
           <meta property="og:url" content="https://theresumebuilderai.com/404" />
           <meta property="og:site_name" content="ResumeBuilderAI" />
        </Head>
        <Navbar />
        <div className="four-container">
            <div className="four-div">
        <h1 className="four-header">404</h1>
        <h2 className="four-subheader">We can&apos;t seem to find the page you&apos;re looking for.</h2>
        <Link href='/'><button type='button' className="four-btn btn">Back Home?</button></Link>
        </div>
        </div>
        <Footer />
        </div>
  );
};

export default Custom404;