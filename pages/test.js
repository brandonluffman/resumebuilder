import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GradeContainer from '../components/GradeContainer'
import Construction from '../components/Construction'
import Test from '../components/Test'
import Head from 'next/head'
const test = () => {


  return (
    <>
       <Head>
          <title>ResumeBuilderAI | Test Your Resume</title>
          <meta name="description" content="Unlock your career potential with ResumeBuilderAI. Effortlessly build a professional resume, tailor it to match job descriptions, and test its effectiveness. Start your journey to the perfect job today!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/resume-builder-logo.png" />
          <link rel="apple-touch-icon" href="/resume-builder-logo.png" /> 
          <link rel="canonical" href="https://theresumebuilderai.com/test"/>
          <meta property="og:type" content="article" />
           <meta property="og:title" content="ResumeBuilderAI" />
           <meta property="og:description" content="Unlock your career potential with ResumeBuilderAI. Effortlessly build a professional resume, tailor it to match job descriptions, and test its effectiveness. Start your journey to the perfect job today!" />
           <meta property="og:image" content="/resume-builder-logo.png" />
           <meta property="og:url" content="https://theresumebuilderai.com/test" />
           <meta property="og:site_name" content="ResumeBuilderAI" />
        </Head>
    <Navbar />
    <div className='test-container'>
      <Test />
    </div>
    <Footer />
    </>
  )
}

export default test