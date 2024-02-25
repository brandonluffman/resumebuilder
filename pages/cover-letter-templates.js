import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReviewStars from '../components/ReviewStars'
import TemplateGrid from '../components/TemplateGrid';
import Link from 'next/link';
import { MdVerified } from 'react-icons/md'
import Head from 'next/head';


const CoverLetterTemplates = () => {



  return (
    <>
        <Head>
          <title>ResumeBuilderAI | Cover Letter Templates</title>
          <meta name="description" content="Unlock your career potential with ResumeBuilderAI. Effortlessly build a professional resume, tailor it to match job descriptions, and test its effectiveness. Start your journey to the perfect job today!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/resume-builder-logo.png" />
          <link rel="apple-touch-icon" href="/resume-builder-logo.png" /> 
          <link rel="canonical" href="https://theresumebuilderai.com/cover-letter-templates"/>
          <meta property="og:type" content="article" />
           <meta property="og:title" content="ResumeBuilderAI" />
           <meta property="og:description" content="Unlock your career potential with ResumeBuilderAI. Effortlessly build a professional resume, tailor it to match job descriptions, and test its effectiveness. Start your journey to the perfect job today!" />
           <meta property="og:image" content="/resume-builder-logo.png" />
           <meta property="og:url" content="https://theresumebuilderai.com/cover-letter-templates" />
           <meta property="og:site_name" content="ResumeBuilderAI" />
        </Head>
    <Navbar />
    <div className='template-container'>
      <div className='template-top-text'>
      <MdVerified className='verified-icon'/>
        <h1 className='template-header'>Cover Letter Examples</h1>
        <h6 className='template-subheader'>Supercharge your job search with ResumeBuilderAI templates. Need more help? Use ResumeBuilderAI&apos;s AI <span className='blue-color-change'>Cover Letter Builder</span> to instantly generate tailored cover letters.</h6>
        <Link href='/cover-letter-builder'><button className='btn btn-primary template-btn'>Create your Cover Letter - It&apos;s free</button></Link>
        {/* {user?.user ? (<Link href='/cover-letter-builder'><button className='btn btn-primary template-btn'>Create your Cover Letter - It&apos;s free</button></Link>):(<Link href='/register'><button className='btn btn-primary template-btn'>Create your Cover Letter - It&apos;s free</button></Link>)} */}

        {/* <ReviewStars className='review'/> */}
        </div>
        <div className='template-top-img'>
          <img src='/cover-letter-2.svg' className='template-main-img'></img>
        </div>
    </div>
    <div className='templates-grids-container'>
        <h3 className='templates-header'>Most Popular Cover Letter Examples</h3>
        <TemplateGrid type='coverLetter'/>
        <hr className='templates-hr'></hr>
        <h3 className='templates-header'>Programming Cover Letter Examples</h3>
        <TemplateGrid type='coverLetter' />
        <div className='templates-all-container'>
        <button className='templates-all btn btn-primary'>View All</button>
        </div>
        <h3 className='templates-header'>Marketing Cover Letter Examples</h3>
        <TemplateGrid type='coverLetter' />
        <div className='templates-all-container'>
        <button className='templates-all btn btn-primary'>View All</button>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default CoverLetterTemplates;
