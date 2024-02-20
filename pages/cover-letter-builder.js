import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Construction from '../components/Construction'
import CoverLetter from '../components/CoverLetter'

const coverLetterBuilder = () => {
  return (
    <>
    <Navbar />
    <div className='cl-builder-container'>
        {/* <Construction /> */}
        <CoverLetter />
    </div>
    <Footer />
    </>
  )
}

export default coverLetterBuilder