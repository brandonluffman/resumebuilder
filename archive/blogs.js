import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const blogs = () => {
  return (
    <>
    <Navbar />
      <div className='blogs-container'>
      <h3 className='blogs-header'>Blogs</h3>
      <div className='blogs-div'>
      <h5 className='blog-upcoming'>Blog Coming Soon!</h5>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default blogs