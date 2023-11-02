// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {GoDotFill} from 'react-icons/go'
import {RiArrowDropDownLine} from 'react-icons/ri'
import Link from 'next/link' 
import useEmblaCarousel from 'embla-carousel-react'
import EmblaCarousel from '../components/EmblaCarousel'
import {BsCheck2Circle} from 'react-icons/bs'
import DropdownFAQ from '../components/DropdownFAQ'
import LogoSlider from '../components/LogoSlider'
import ImageSlider from '../components/ImageSlider'
import HeaderSwitcher from '../components/HeaderSwitcher'
export default function Home() {
  const [showMe, setShowMe] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  function toggleNav(){
    setShowMe(!showMe);
    setIsActive(!isActive);
  }
  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 4
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div>
    <Navbar />
    <div className="index-spotlight-container">
      <div className='index-spotlight-div'>
      <h1 className='index-spotlight-header'>Unlock Your Career Potential</h1>
      <h3 className='index-spotlight-subheader'>Build a resume guaranteed to crack the ATS & land your dream job. 🤝</h3>
      <div className='index-created'><span className='blue-color-change color-change-number'>3,452 </span> Resumes Created Today <GoDotFill className='index-dot' /></div>
      <Link href='/build'><button type='button' className='index-spotlight-btn btn btn-primary'>Build A Resume</button></Link>
      <Link href='/test'><button type='button' className='index-spotlight-btn btn btn-secondary'>Test Your Resume</button></Link>
      </div>
    </div>
    <LogoSlider className='logo-slider' />
    <div className="index-what-container">
      <h1 className='index-what-header'>When you apply for a job, that application doesn&apos;t go to a human first. Instead, it goes through software known as an Applicant Tracking System (<span className='blue-color-change'>ATS</span>).</h1>
      {/* <h3 className='index-what-subheader'>Quite frankly, if your resume isn&apos;t optimized for an ATS, it might never be seen by a hiring manager. According to a study by Preptel, a job search firm, 75 percent of all resumes are never seen by a real human being. Instead, they are filtered out by ATS without a second glance.</h3> */}
      <div className='index-what-img-div'>
      <img src='/bot-resume.png' className='index-what-bot-img'></img>
      </div>
      <h3 className='index-what-subheader'><span className='blue-color-change'>75%</span> of all resumes <span className='italic'>never</span> make it to the Hiring Manager.</h3>
      {/* <h6 className='index-what-suberheader'></h6> */}
    </div>
    <div className='index-banner-container'>
      <img src='/gauge.png' width='125'></img>
        <h2 className='index-banner-header'>Test Your Resume</h2>
        {/* <p className='index-banner-subheader'>Before you submit your application, ensure your Resume is up to par with ATS systems. (Yes, It&apos;s Free)</p> */}
        <Link href='/test'><button type='button' className='index-what-btn btn btn-white'>Test</button></Link>
        <h2 className='index-banner-subheader'>Don&apos;t have a resume yet?</h2>
        <Link href='/build'><button type='button' className='index-what-btn btn btn-tertiary'>Build A Resume</button></Link>
    </div>
    <div className="index-about-container">
      <img src='/resume-graphic.png' width='100' className='index-about-img'></img>
      <h2 className='index-about-header' >Online job boards like Indeed make it easy to submit the same resume, again and again and again. But you&apos;ll get better results if you tailor each and every resume to the specific position you&apos;re applying for.</h2>
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      <ImageSlider />
      {/* <div className='index-about-fixed-div'>
        <h2 className='index-about-fixed-header fixed-header-active'>Captivating Copy with Generative AI</h2>
        <h2 className='index-about-fixed-header'>Job Description Keyword Optimization</h2>
        <h2 className='index-about-fixed-header'>Match Company Tone</h2>
        <h2 className='index-about-fixed-header'>Monitor Critical Hiring Messages</h2>
      </div> */}
      <HeaderSwitcher />

      <h3 className='index-about-subheader'>A tailored resume has a much better chance of making it in to the hands of a hiring manager. This leads to more interviews and job offers.</h3>
      <div className='index-about-img-div'>
      <img src='/bullseye.png' width='125' className='index-about-img'></img>
      </div>
      {/* <p className=''>Emphasize your skills in an eloquent matter with our AI systems to sell your skills to the highest degree.</p> */}
      <Link href='/tailor'><button type='button' className='index-about-btn btn btn-tertiary'>Tailor Your Resume</button></Link>

      </div>
      <div className='index-features-container'>
                <img src='/ribbon.png' className='index-features-img'></img>
        <h3 className='index-features-header'>Features designed to help you win your <span className='italic blue-color-change'>dream job</span></h3>
        <div className='index-features-grid'>
          <div className='index-features-grid-item'>
            {/* <img src='/bullseye.png' className='index-features-grid-img' width='50'></img> */}
                        <div className='index-features-grid-copy-div'>
                        <BsCheck2Circle className='index-features-grid-icon' />

            <h4 className='index-features-grid-title'>AI Resume Builder</h4>
            <p className='index-features-grid-copy'>An AI resume builder can quickly create a tailored, job-specific resume that highlights an applicant&apos;s strengths, streamlining the job application process.</p>
            </div>
          </div>
          <div className='index-features-grid-item'>
            <div className='index-features-grid-copy-div'>
            <BsCheck2Circle className='index-features-grid-icon' />

            <h4 className='index-features-grid-title'>Automatic Spell Checker</h4>
            <p className='index-features-grid-copy'>An automatic spell checker for a resume can swiftly eliminate typographical errors, ensuring a professional and attentive-to-detail impression to potential employers.</p>
            </div>
          </div>
          <div className='index-features-grid-item'>
            <div className='index-features-grid-copy-div'>
            <BsCheck2Circle className='index-features-grid-icon' />

            <h4 className='index-features-grid-title'>AI Generated Summary</h4>
            <p className='index-features-grid-copy'>An AI-generated summary can condense extensive information into a concise format, highlighting key qualifications and experience to quickly capture an employer&apos;s interest.</p>
            </div>
          </div>
          <div className='index-features-grid-item'>
            <div className='index-features-grid-copy-div'>
            <BsCheck2Circle className='index-features-grid-icon' />

            <h4 className='index-features-grid-title'>AI Generated Copy</h4>
            <p className='index-features-grid-copy'>AI-generated copy ensures engaging, error-free, and tailored content that resonates with the target audience, potentially increasing the impact and effectiveness of the communication.</p>
            </div>
          </div>
          <div className='index-features-grid-item'>
            <div className='index-features-grid-copy-div'>
            <BsCheck2Circle className='index-features-grid-icon' />

            <h4 className='index-features-grid-title'>Keyword Optimization</h4>
            <p className='index-features-grid-copy'>Keyword optimization aligns a resume with job descriptions and industry terminology, enhancing its visibility and match rate in applicant tracking systems.</p>
            </div>
          </div>
          <div className='index-features-grid-item'>
            <div className='index-features-grid-copy-div'>
            <BsCheck2Circle className='index-features-grid-icon' />

            <h4 className='index-features-grid-title'>ATS Optimized</h4>
            <p className='index-features-grid-copy'>Being ATS-optimized ensures a resume&apos;s format and content are tailored to rank higher in applicant tracking systems, increasing the chances of landing an interview.</p>
            </div>
          </div>
        </div>
      </div>




      <div className='index-cover-container'>
        <img src='/robbi.png' width='400' className='index-cover-img'></img>
        <h2 className='index-cover-header'>Cover Letter Generation</h2>
        <p className='index-cover-copy'>Win over employers and recruiters by using one of our 27 professionally-designed cover letter templates. Download to Word or PDF.</p>
        <div className='index-cover-img-div'>
        <img src='/cover-letter.svg' width='400' className='cover-letter-img cover-img-1'></img>
        <img src='/cover-letter-2.svg' width='400' className='cover-letter-img cover-img-2'></img>
        <img src='/cover-letter-3.png' width='400' className='cover-letter-img cover-img-3'></img>

        </div>
        {/* <button type='button' className='index-cover-btn btn btn-black'>Build A Cover Letter</button> */}

      </div>





      <div className='index-banner-container banner-2'>
        <h3 className='index-started-header'>Don&apos;t have a resume or cover letter yet?</h3>
        <Link href='/test'><button type='button' className='index-started-btn btn btn-tertiary'>Get Started</button></Link>
      </div>




      <div className='index-blog-container'>
        <h2 className='index-blog-header'>Check out the blog</h2>
        <div className='index-blog-card-container'>
          <div className='index-blog-card'>
          <div className="gradient-box"></div>
          <div className='index-blog-card-content'>
            <h2 className='index-blog-title'>The universal guide on how to write the perfect resume</h2>
            <span className='index-blog-tag'>ATS</span>
            <div className='index-blog-bottom-div'>
              <p className='index-blog-bottom-copy'>Resume Guide <GoDotFill className='index-blog-bottom-dot' /> 52 Min Read</p>
            </div>
            </div>
          </div>
          <div className='index-blog-card'>
          <div className="gradient-box"></div>
          <div className='index-blog-card-content'>
            <h2 className='index-blog-title'>The universal guide on how to write the perfect resume</h2>
            <span className='index-blog-tag'>Resume</span>
            <div className='index-blog-bottom-div'>
              <p className='index-blog-bottom-copy'>Resume Guide <GoDotFill className='index-blog-bottom-dot' /> 52 Min Read</p>
            </div>
            </div>
          </div>
        </div>
        <Link href='/blogs'><button type='button' className='btn btn-tertiary'>View All</button></Link>

      </div>

      <div className='index-faqs-container'>
          <h2 className='index-faqs-header'>Frequently Asked Questions</h2>
          <div className='faq-container'>
              {/* <h4 className='faq-header'>Testing FAQ</h4> */}
              <DropdownFAQ
                 title="Can I use ResumeBuilderAI for free?"
              content="Yes, ResumeBuilderAI provides a selection of free services that allow users to create a basic resume without any cost. However, we also offer a range of premium services for users who wish to access more comprehensive features, such as personalized templates, advanced AI writing assistance, and detailed performance analytics, designed to further enhance your resume and improve your job application success rate."
         
            />
            <DropdownFAQ
                 title="How can I customize my resume?"
              content="You can customize your resume on our platform by choosing from various professional templates, adjusting fonts and colors, and organizing sections to best showcase your skills and experience. Our AI tools also offer suggestions to tailor your content to specific job postings, ensuring that your resume speaks directly to the roles you're applying for. For more personalized guidance, our premium services include one-on-one consultations with resume experts."
            />
                <DropdownFAQ
                    title="Can I download my resume to Word or PDF?"
                  content="Yes, once you've finished creating your resume with our builder, you can easily download it in multiple formats, including Word (.docx) and PDF, allowing you to submit your resume to potential employers in the format they prefer or keep for your own records."
                />
              
                <DropdownFAQ
                    title="How do I cancel, downgrade or delete my account?"
                  content="To cancel, downgrade, or delete your account, please navigate to the 'Settings' section of your account dashboard. From there, you can select the 'Subscription' option to cancel or downgrade your services. If you wish to delete your account, you'll find the option at the bottom of the 'Account' section. Follow the prompts to confirm your action. Should you need any assistance or encounter any issues, our customer support team is available to help you through the process."
                />
                
          </div>
      </div>






      <div className='index-join-container'>
        <div className='index-join-div'>
          <h2 className='index-join-header'>Join over <span className='blue-color-change'>30,917,000</span> users worldwide</h2>
          <p className='index-join-p'>Start for free — try our resume builder now</p>
          </div>
      </div>






    <Footer />
    </div>
  )
}
