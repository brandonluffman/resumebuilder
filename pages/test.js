import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GradeContainer from '../components/GradeContainer'
import Construction from '../components/Construction'
import Test from '../components/Test'
const test = () => {


  return (
    <>
    <Navbar />
    <div className='test-container'>
      <Test />
    </div>
    <Footer />
    </>
  )
}

export default test