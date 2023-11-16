import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Construction from '../components/Construction'

const coverLetterBuilder = () => {
  return (
    <>
    <Navbar />
    <div className='cl-builder-container'>
        <Construction />
    </div>
    <Footer />
    </>
  )
}

export default cover-letter-builder