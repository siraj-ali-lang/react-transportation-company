import React from 'react'
import {useState, useEffect} from 'react'
import './slider.scss'
import {sliderData} from './slider-data'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length;

    
    
    let intervalTime = 5000;
    let stop = 0;
    let autoScroll = true;
    
    
    

    
        
        

    const nextSlide = ()=> {
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide +1)
        
       
    }
    const prevSlide = ()=> {
        setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide -1 )
    }
    
    

  return (
    <div className='slider'>
        <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide}/>
        <AiOutlineArrowRight className='arrow next' onClick={nextSlide}/>

        {sliderData.map((slide, index) => {
            return (
                <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
                    {index === currentSlide && (
                        <>
                        <img src={slide.image} alt="slide" />
                        <div className="content">
                            <h2>{slide.heading}</h2>
                            <p>{slide.desc}</p>
                            <hr />
                            <button className="--btn --btn-primary">Get started</button>
                        </div>
                        </>
                    )}
                </div>
            )
        })}

    </div>
  )
}

export default Slider