import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Construction from '../components/Construction'
import Build from '../components/Build'
import Head from 'next/head'
const build = () => {

  return (
    <>
          <Head>
          <title>ResumeBuilderAI | Build Your Resume</title>
          <meta name="description" content="Unlock your career potential with ResumeBuilderAI. Effortlessly build a professional resume, tailor it to match job descriptions, and test its effectiveness. Start your journey to the perfect job today!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/resume-builder-logo.png" />
          <link rel="apple-touch-icon" href="/resume-builder-logo.png" /> 
          <link rel="canonical" href="https://theresumebuilderai.com/build"/>
          <meta property="og:type" content="article" />
           <meta property="og:title" content="Venum" />
           <meta property="og:description" content="Unlock your career potential with ResumeBuilderAI. Effortlessly build a professional resume, tailor it to match job descriptions, and test its effectiveness. Start your journey to the perfect job today!" />
           <meta property="og:image" content="/resume-builder-logo.png" />
           <meta property="og:url" content="https://theresumebuilderai.com/build" />
           <meta property="og:site_name" content="Venum" />
        </Head>
    <Navbar />
    <div className='build-container'>
        {/* <Construction /> */}
        <Build />
    </div>
    <Footer />
    </>
  )
}

export default build