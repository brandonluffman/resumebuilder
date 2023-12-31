import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import InputResume from '../components/InputResume'
import GradeContainer from '../components/GradeContainer'
const test = () => {
  const resumeInfo = {
    'name': 'brandon',
    'phone': '222-222-2222',
    'email': 'test@gmail.com',
    'address': '8 Easton Rd, Los Angeles CA',
    'Website': 'https://google.com',
    'work': 'Work Experience',
    'education': 'Penn State',
    'Skills': ['Javascript', 'React', 'Next.js'],
    'Certifications': ['AWS', 'Microsoft', 'IBM'],
    'Summary': 'Testing Summary',
    'Objective': 'Testing Objective',
    'Test': null
  }


  return (
    <>
    <Navbar />
    <div className='test-container'>
        <InputResume />
        <GradeContainer />
    </div>
    <div className='test-resume-information-container'>
    {/* <ul className='test-resume-menu'>
        {Object.keys(resumeInfo).map((key) => (
          <li key={key} className='resume-info-grid-item'>
            <p className='resume-info-key'>{key}</p> 
            <p className='resume-info-value'>{resumeInfo[key] || "Nothing"}</p>
          </li>
        ))}
      </ul> */}
      {/* <div className='test-resume-info-contact'>
      </div>
      <div className='test-resume-info-name'>
      </div>
      <div className='test-resume-info-phone'>
      </div>
      <div className='test-resume-info-email'>
      <div className='test-resume-info-address'></div>
      <div className='test-resume-info-links'></div>
      <div className='test-resume-info-work'></div>
      <div className='test-resume-info-education'></div>
      <div className='test-resume-info-skills'></div>
      <div className='test-resume-info-certifications'></div>
      <div className='test-resume-info-summary'></div>
      <div className='test-resume-info-objective'></div> */}
    </div>
    <Footer />
    </>
  )
}

export default test