import React, { useState, useEffect } from 'react';
import './Slider.css'; // Ensure this import is correct
import slide1 from './market.png'; // Update these paths
import slide2 from './webdev.jpg';
import slide3 from './img3.png';
import slide4 from './img4.jpg';
import slide5 from './img5.png';
import slide6 from './img6.jpg';

const slides = [
    { src: slide1,des:'Learn about StockMarket & Fundamentals of Finance', text: 'Market-Analysis', className: 'img1' },
    { src: slide2,des:'Learn frontend and framework libraries like ReactJS, Tailwind and built some projects on it', text: 'Web Development', className: 'img2' },
    { src: slide3, des:'Learn DSA and built some projects like Sudoko-Solver', text: 'Data Structures & Algorithm', className: 'img3' },
    { src: slide4, des:'Learn about UI-UX frameworks and some softwares like Figma,Canva',text: 'UI-UX', className: 'img4' },
    { src: slide5, des:'Learn basics of Machine Learning', text: 'Machine Learning', className: 'img5' },
    { src: slide6,  des:'Learn basics of App development',text: 'App Development', className: 'img6' },
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesToShow = 3; // Number of slides to show at a time
    const slideInterval = 8000; // Interval time in milliseconds (8 seconds)

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex <= 0 ? slides.length - slidesToShow : prevIndex - slidesToShow));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= slides.length - slidesToShow ? 0 : prevIndex + slidesToShow));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, slideInterval);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="slider">
            <button onClick={prevSlide} className="arrow left">❮</button>
            <div className="slider-container" style={{ transform: `translateX(-${(currentIndex / (slides.length - slidesToShow)) * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide" data-text={slide.des}>
                        <img 
                            src={slide.src} 
                            alt={`Slide ${index + 1}`} 
                            className={`slide-image ${slide.className}`} // Apply class from slide data
                        />
                        <div className="slide-text">{slide.text}</div>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} className="arrow right">❯</button>
           
        </div>
    );
};

export default Slider;
