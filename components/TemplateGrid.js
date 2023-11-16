import React from 'react'

const TemplateGrid = () => {
  return (
    <div className='template-grid-container'>
    <div className='template-grid-item'>
      <img src='/cover-letter-2.svg'  className='template-grid-img'></img>
      <p className='template-grid-text'>Account Executive</p> 
      </div>
      <div className='template-grid-item'>
      <img src='/cover-letter-2.svg'  className='template-grid-img'></img>
      <p className='template-grid-text'>Startup Founder</p> 
      </div>
      <div className='template-grid-item'>
      <img src='/cover-letter-2.svg'  className='template-grid-img'></img>
      <p className='template-grid-text'>Software Engineer Intern</p> 
      </div>
      <div className='template-grid-item'>
      <img src='/cover-letter-2.svg'  className='template-grid-img'></img>
      <p className='template-grid-text'>Entry Level Data Scientist</p> 
      </div>
  </div>
  )
}

export default TemplateGrid