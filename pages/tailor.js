import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Construction from '../components/Construction'
import Tailor from '../components/Tailor'

const tailor = () => {
  return (
    <>
    <Navbar />
    <div className='tailor-container'>
        {/* <Construction /> */}
        <Tailor />
    </div>
    <Footer />
    </>
  )
}

export default tailor