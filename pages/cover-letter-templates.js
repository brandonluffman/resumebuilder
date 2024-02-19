import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReviewStars from '../components/ReviewStars'
import TemplateGrid from '../components/TemplateGrid';
import Link from 'next/link';
import { MdVerified } from 'react-icons/md'


const CoverLetterTemplates = () => {



  return (
    <>
    <Navbar />
    <div className='template-container'>
      <div className='template-top-text'>
      <MdVerified className='verified-icon'/>
        <h1 className='template-header'>Cover Letter Examples</h1>
        <h6 className='template-subheader'>Supercharge your job search with ResumeBuilderAI templates. Need more help? Use ResumeBuilderAI&apos;s AI <span className='blue-color-change'>Cover Letter Builder</span> to instantly generate tailored cover letters.</h6>
        <button className='btn btn-primary template-btn'>Create your Cover Letter - It&apos;s free</button>
        {/* {user?.user ? (<Link href='/cover-letter-builder'><button className='btn btn-primary template-btn'>Create your Cover Letter - It&apos;s free</button></Link>):(<Link href='/register'><button className='btn btn-primary template-btn'>Create your Cover Letter - It&apos;s free</button></Link>)} */}

        {/* <ReviewStars className='review'/> */}
        </div>
        <div className='template-top-img'>
          <img src='/cover-letter-2.svg' className='template-main-img'></img>
        </div>
    </div>
    <div className='templates-grids-container'>
        <h3 className='templates-header'>Most Popular Cover Letter Examples</h3>
        <TemplateGrid />
        <hr className='templates-hr'></hr>
        <h3 className='templates-header'>Programming Cover Letter Examples</h3>
        <TemplateGrid />
        <div className='templates-all-container'>
        <button className='templates-all btn btn-primary'>View All</button>
        </div>
        <h3 className='templates-header'>Marketing Cover Letter Examples</h3>
        <TemplateGrid />
        <div className='templates-all-container'>
        <button className='templates-all btn btn-primary'>View All</button>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default CoverLetterTemplates;
