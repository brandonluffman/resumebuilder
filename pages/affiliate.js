import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const affiliate = () => {
  return (
    <>
        <Navbar />
        <div className='affiliate-container'>
            <div className='affiliate-content-container'>
            <span className='affiliate-tag'>Affiliates</span>
            <h2 className='affiliate-header'>Partner with ResumeBuilder<span className='blue-color-change'>AI</span></h2>
            <div className='affiliate-btn-container'>
            <button className='affiliate-btn btn btn-primary'>Join the Program</button>
            <a href='#about'><button className='affiliate-btn btn btn-white'>Learn More</button></a>
            </div>
            <img src='/affiliate-banner.svg' className='affiliate-banner'></img>
            <h3 className='affiliate-intro' id='about'>We are ResumeBuilder<span className='blue-color-change'>AI</span> — the leading provider of professional, field-tested templates that follow the exact “resume rules” employers look for. Our resume builder is easy to use and documents can be completed in minutes!</h3>
            <hr className='affiliate-hr'></hr>
            <p className='affiliate-content'>Your audience can test us out for free before purchasing. Our subscription plans will then unlock our ever-growing resume and cover letter template library to use for their job search. Give them a real advantage with a proven product created by experts, improved by data, and trusted by millions of professionals.</p>
            <p className='affiliate-content'>We’ve been successful with a wide variety of promotional types and partner best with affiliates that share our vision to help job seekers grow their careers and save time getting hired.</p>
            <h6 className='affiliate-content-header'>Are you interested?</h6>
            <p className='affiliate-content'>If you feel you are a good match for us, use the sign-up link below to join ResumeBuilderAI’s affiliate program. Once vetted and approved on our affiliate network, we’ll send you terms and incentivize you with highly competitive commission rates.</p>
            <p className='affiliate-content'>We’re offering our product for use in over 25 countries. Pricing for our products is country-specific and you can opt to be paid in a currency of your choice.</p>
            <h6 className='affiliate-content-header'>Our Program Includes:</h6>
            <hr className='affiliate-hr'></hr>
            <ul className='affiliate-list'>
                <li className='affiliate-list-item'>
                    <p className='affiliate-list-header'>30-Day Cookie</p>
                    <p className='affiliate-list-content'>Get credit with an industry-standard 30-day attribution window.</p>
                </li>
                <li className='affiliate-list-item'>
                    <p className='affiliate-list-header'>Earn Competitive Commissions</p>
                    <p className='affiliate-list-content'>Get paid on both trials and subscriptions.</p>
                </li>
                <li className='affiliate-list-item'>
                    <p className='affiliate-list-header'>Get Paid on Your Terms</p>
                    <p className='affiliate-list-content'>We pay monthly… on time and in your currency.</p>
                </li>
                <li className='affiliate-list-item'>
                    <p className='affiliate-list-header'>Easy Onboarding</p>
                    <p className='affiliate-list-content'>Most affiliates can get started in less than 7 days.</p>
                </li>
                <li className='affiliate-list-item'>
                    <p className='affiliate-list-header'>Detailed Metrics</p>
                    <p className='affiliate-list-content'>See near-real-time data on our powerful platform.</p>
                </li>
                <li className='affiliate-list-item'>
                    <p className='affiliate-list-header'>High Conversion Rates</p>
                    <p className='affiliate-list-content'>We’re optimized for maximum results.</p>
                </li>
                <li className='affiliate-list-item'>
                    <p className='affiliate-list-header'>High-Quality Creative</p>
                    <p className='affiliate-list-content'>Artwork is available in the languages you need.</p>
                </li>
                <li className='affiliate-list-item'>
                    <p className='affiliate-list-header'>We&apos;re Growing!</p>
                    <p className='affiliate-list-content'>Artwork is available in the languages you need.</p>
                </li>
            </ul>
            </div>
            <div className='affiliate-partner-banner'>
                <h3 className='affiliate-partner-header'>Ready to Partner?</h3>
                <p className='affiliate-partner-content'>Ready to partner with us? Great! Let&apos;s get you started.</p>
                <button className='affiliate-partner-btn btn-white btn'>Join the Program</button>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default affiliate