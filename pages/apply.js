import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Construction from '../components/Construction'
import Tailor from '../components/Tailor'
import Head from 'next/head'

const apply = () => {
  return (
    <>
       <Head>
          <title>ResumeBuilderAI | Apply</title>
          <meta name="description" content="Unlock your career potential with ResumeBuilderAI. Effortlessly build a professional resume, tailor it to match job descriptions, and test its effectiveness. Start your journey to the perfect job today!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/resume-builder-logo.png" />
          <link rel="apple-touch-icon" href="/resume-builder-logo.png" /> 
          <link rel="canonical" href="https://theresumebuilderai.com/apply"/>
          <meta property="og:type" content="article" />
           <meta property="og:title" content="ResumeBuilderAI" />
           <meta property="og:description" content="Unlock your career potential with ResumeBuilderAI. Effortlessly build a professional resume, tailor it to match job descriptions, and test its effectiveness. Start your journey to the perfect job today!" />
           <meta property="og:image" content="/resume-builder-logo.png" />
           <meta property="og:url" content="https://theresumebuilderai/com/apply" />
           <meta property="og:site_name" content="ResumeBuilderAI" />
        </Head>
    <Navbar />
    <div className='tailor-container'>
        <h1>Login to Apply</h1>
        {/* <Construction /> */}
        {/* <Tailor /> */}
    </div>
    <Footer />
    </>
  )
}

export default apply