import { useState } from 'react';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: '/assets/carrusel1.jpg', alt: 'Imagen del carrusel 1' },
    { id: 2, image: '/assets/carrusel2.webp', alt: 'Imagen del carrusel 2' },
    { id: 3, image: '/assets/carrusel3.jpg', alt: 'Imagen del carrusel 3' },
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
          <div key={slide.id} className="carousel-slide">
            <img
              src={slide.image}
              alt={slide.alt}
              className="carousel-image"
            />
          </div>
        ))}
      </div>

      <button className="carousel-button prev" onClick={prevSlide}>
        <AiFillCaretLeft size={30} />
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        <AiFillCaretRight size={30} />
      </button>
    </div>
  );
};

export default Carousel;
