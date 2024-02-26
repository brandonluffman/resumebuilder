import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'
import ReviewStars from '../components/ReviewStars'
import Link from 'next/link'
import Head from 'next/head'


const reviews = () => {
  return (
    <>
        <Head>
          <title>ResumeBuilderAI | Reviews</title>
          <meta name="description" content="Unlock your career potential with ResumeBuilderAI. Effortlessly build a professional resume, tailor it to match job descriptions, and test its effectiveness. Start your journey to the perfect job today!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/resume-builder-logo.png" />
          <link rel="apple-touch-icon" href="/resume-builder-logo.png" /> 
          <link rel="canonical" href="https://theresumebuilderai.com/reviews"/>
          <meta property="og:type" content="article" />
           <meta property="og:title" content="ResumeBuilderAI" />
           <meta property="og:description" content="Unlock your career potential with ResumeBuilderAI. Effortlessly build a professional resume, tailor it to match job descriptions, and test its effectiveness. Start your journey to the perfect job today!" />
           <meta property="og:image" content="/resume-builder-logo.png" />
           <meta property="og:url" content="https://theresumebuilderai.com/reviews" />
           <meta property="og:site_name" content="ResumeBuilderAI" />
        </Head>
    <Navbar />
    <Chatbot />
    <div className='reviews-container'>
        <div className='reviews-stars'>
            <AiFillStar className='index-star'/>
            <AiFillStar className='index-star'/>
            <AiFillStar className='index-star'/>
            <AiFillStar className='index-star'/>
            <AiFillStar className='index-star'/>
        </div>
        <h2 className='reviews-header'>A Feature-Rich, Minimalist Experience. With ResumeBuilder<span className='blue-color-change'>AI</span>, I focused exclusively on the content of my resume, liberated from the hassles of formatting. This was the key advantage I needed to confidently step into new career opportunities.</h2>
        <div className='reviews-profile-container'>
        <div className='reviews-profile'>
            <img src='/headshot.webp' className='reviews-profile-img'></img>
            <div className='reviews-profile-text'>
        <p className='reviews-name'>Jim Brown</p>
        <p className='reviews-status'>Hired at Amazon</p>
        </div>
        </div>
        <div className='reviews-logo'>
            <img src='/amazon-long.png' className='reviews-logo-img'></img>
        </div>
        </div>
        <h2 className='reviews-grid-header'>Don&apos;t Just Take Our Word For It</h2>
        <h6 className='reviews-grid-subheader'>Hear from some of our amazing customers who are building faster.</h6>

        <div className='reviews-review-grid'>
            <div className='review-grid-item'>
                <ReviewStars />
                <p className='review-grid-content'>ResumeBuilderAI was a game-changer for me. The AI-driven suggestions made my resume stand out and I landed interviews at top companies. The user interface is intuitive and made the daunting task of resume writing surprisingly enjoyable.</p>
                <p className='review-grid-name'>John S.</p>
            </div>
            <div className='review-grid-item'>
                <ReviewStars />
                <p className='review-grid-content'>I&apos;ve tried several resume-building tools, but nothing compares to ResumeBuilderAI. Its smart analytics and customization options are exceptional. It helped me highlight my skills effectively and I&apos;ve received more callbacks than ever before.</p>
                <p className='review-grid-name'>Emily F.</p>
            </div>
            <div className='review-grid-item'>
                <ReviewStars />
                <p className='review-grid-content'>As a career coach, I recommend ResumeBuilderAI to all my clients. The AI insights are spot-on, guiding users to create resumes that appeal to both ATS systems and hiring managers. It&apos;s a powerful tool that delivers results.</p>
                <p className='review-grid-name'>Marcus J.</p>
            </div>
            <div className='review-grid-item'>
                <ReviewStars />
                <p className='review-grid-content'>I was amazed by how quickly and easily I could create a professional-looking resume with ResumeBuilderAI. The templates are modern and the AI suggestions are incredibly helpful. It took the stress out of job hunting for me.</p>
                <p className='review-grid-name'>Samantha L.</p>
            </div>
            <div className='review-grid-item'>
                <ReviewStars />
                <p className='review-grid-content'>The detailed feedback from ResumeBuilderAI transformed my resume. I appreciated the personalized tips that helped me strengthen my application. The platform is user-friendly and efficient - perfect for anyone looking to upgrade their resume.</p>
                <p className='review-grid-name'>Alex M.</p>
            </div>
            <div className='review-grid-item'>
                <ReviewStars />
                <p className='review-grid-content'>ResumeBuilderAI is outstanding! Its intuitive design made it simple to input my information and the AI-generated content was impressive. I landed my dream job thanks to the polished resume I created with this tool.</p>
                <p className='review-grid-name'>Rachel K.</p>
            </div>
        </div>
        <h2 className='reviews-supercharge'><span className='blue-color-change'>Supercharge</span> your Job Search with ResumeBuilder<span className='blue-color-change'>AI</span></h2>
        <h6 className='reviews-supercharge-subheader'>Get started for free and find out what you can accomplish with the power of ResumeBuilder<span className='blue-color-change'>AI</span>.</h6>
        {/* <Link href='/register'><button className='reviews-supercharge-btn btn btn-primary'>Create your free account now</button></Link> */}
    </div>
    <Footer />
    </>
  )
}

export default reviews