import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import imageByIndex from './imageByIndex'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const alts = [
    'Captivating Copy with Generative AI',
    'Job Description Keyword Optimization',
    'Match Company Tone',
    'Monitor Critical Hiring Messages',
  ];
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                {/* <span>{index + 1}</span> */}
              </div>
              <img
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt={alts[index]}
              />
        
              {/* <h2 className='embla_header'>{alts[index]}</h2> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel