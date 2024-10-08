/*
import {useRef} from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './caruselNew.css';


export const CaruselNew = () => {

    const slides = [
        {id: 1, color: '#D5A52B'},
        {id: 2, color: '#FFEE50'},
        {id: 3, color: null},
        {id: 4, color: '#28C301'},
        {id: 5, color: '#007AFF'},
        {id: 6, color: '#3616B8'},
        {id: 7, color: '#6F02DB'},
        {id: 8, color: '#FF54E4'},
        {id: 9, color: '#FF3B30'},
    ];
    const sliderRef = useRef(null);

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.goTo(sliderRef.current.state.currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.goTo(sliderRef.current.state.currentIndex - 1);
        }
    };

    return (
        <div className="carousel-container">
            <AwesomeSlider ref={sliderRef}>
                {slides.map((slide) => (
                    <div key={slide.id} style={slide.color?{ backgroundColor: slide.color }: {border: 'none'}}>
                        <h2>Slide {slide.id}</h2>
                    </div>
                ))}
            </AwesomeSlider>
            <div className="custom-arrows">
                <button onClick={handlePrev} className="arrow left-arrow">◀</button>
                <button onClick={handleNext} className="arrow right-arrow">▶</button>
            </div>
        </div>
    );
};
*/
