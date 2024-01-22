import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import InputResume from '../components/InputResume'
import GradeContainer from '../components/GradeContainer'
import Construction from '../components/Construction'
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
        {/* <InputResume />
        <GradeContainer /> */}
        <Construction />
    </div>
    <Footer />
    </>
  )
}

export default test