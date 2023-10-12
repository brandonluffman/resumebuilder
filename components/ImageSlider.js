// components/ImageSlider.js
import { useState, useEffect } from 'react';

const ImageSlider = () => {
    const images = [
        '/apple.png',
        '/amazon.png',
        '/citadel.png',
        '/openai.png',
      ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    useEffect(() => {
      const sliderInterval = setInterval(nextImage, 3000); // Auto transition every 3 seconds
  
      return () => {
        clearInterval(sliderInterval);
      };
    }, []);
  
    return (
        <div className='image-slider'>
            {images.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={`image ${index === currentIndex ? 'active' : ''}`}
                />
            ))}
            </div>
      );
  };
  
  export default ImageSlider;