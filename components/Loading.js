import React from 'react'

const Loading = () => {
  return (
    // <div className='loading-container'>
    //   <div>
    //     <div className='loading-hidden'></div>
    //     {/* <p className='loading-text'>This may take up to 15 seconds</p> */}
    //     </div>
    // </div>
    <div className='lds-container loading-container'><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
  )
}

export default Loading