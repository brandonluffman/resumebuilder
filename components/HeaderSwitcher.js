import { useState, useEffect } from 'react';

const HeaderSwitcher = () => {
  const headers = [
    'Captivating Copy with Generative AI',
    'Job Description Keyword Optimization',
    'Match Company Tone',
    'Monitor Critical Hiring Messages'
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % headers.length);
    }, 3000); // change header every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [headers.length]);

  return (
    <div className='index-about-fixed-div'>
      {headers.map((header, index) => (
        <h2
          key={index}
          className={`index-about-fixed-header ${index === activeIndex ? 'fixed-header-active' : ''}`}
        >
          {header}
        </h2>
      ))}
    </div>
  );
};

export default HeaderSwitcher;
