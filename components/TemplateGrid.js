import React from 'react'

const TemplateGrid = ({ type }) => {
  let imgSrc;
  switch (type) {
    case 'coverLetter':
      imgSrc = '/cover-letter-2.svg';
      break;
    case 'resignationLetter':
      imgSrc = '/resignation-letter-example.webp';
      break;
    case 'resume':
      imgSrc = '/resume.png';
      break;
    default:
      imgSrc = '/default-image.svg'; // Fallback image if type is not recognized
  }

  return (
    <div className='template-grid-container'>
      <div className='template-grid-item'>
        <img src={imgSrc} className='template-grid-img'></img>
        {/* <p className='template-grid-text'>Account Executive</p>  */}
      </div>
      <div className='template-grid-item'>
        <img src={imgSrc} className='template-grid-img'></img>
        {/* <p className='template-grid-text'>Startup Founder</p>  */}
      </div>
      <div className='template-grid-item'>
        <img src={imgSrc} className='template-grid-img'></img>
        {/* <p className='template-grid-text'>Software Engineer Intern</p>  */}
      </div>
      <div className='template-grid-item'>
        <img src={imgSrc} className='template-grid-img'></img>
        {/* <p className='template-grid-text'>Entry Level Data Scientist</p>  */}
      </div>
    </div>
  )
}

export default TemplateGrid;