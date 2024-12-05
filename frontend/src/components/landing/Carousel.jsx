import { useState } from 'react';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: '#62b6cb' },
    { id: 2, color: '#bee9e8' },
    { id: 3, color: '#1b4965' },
    { id: 4, color: '#cae9ff' },
    { id: 5, color: '#5fa8d3' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="carousel-slide"
            style={{ backgroundColor: slide.color }}
          ></div>
        ))}
      </div>

      <button className="carousel-button prev" onClick={prevSlide}>
        <AiFillCaretLeft size={30} /> {/* Icono de flecha hacia la izquierda */}
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        <AiFillCaretRight size={30} /> {/* Icono de flecha hacia la derecha */}
      </button>
    </div>
  );
};

export default Carousel;
