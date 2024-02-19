import React, { useState } from 'react'
import BuildForm from './BuildForm';

const Build = () => {
    const [visible, setVisible] = useState(false);


  return (
    <div>
      <h1>Build Your Resume</h1>
        <BuildForm />
    </div>
  )
}

export default Build