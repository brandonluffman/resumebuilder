import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Construction from '../components/Construction'

const tailor = () => {
  return (
    <>
    <Navbar />
    <div className='build-container'>
        <Construction />
    </div>
    <Footer />
    </>
  )
}

export default tailor