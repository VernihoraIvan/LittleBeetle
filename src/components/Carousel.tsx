// Carousel.js
import { CarouselProps } from "@/utilities/interfaces";
import { useState } from "react";
import CarouselArrow from "@/assets/icons/carousel-arrow.svg?react";

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      <button
        className="absolute z-10 top-1/4 transform -translate-y-1/2 left-4  text-white p-2 rounded-full hover:bg-gray-600 transition"
        //top-1/2 transform -translate-y-1/2 left-0  text-white p-2 rounded-full hover:bg-gray-600 transition
        onClick={prevSlide}
      >
        {/* &#10094; */}
        <CarouselArrow className="transform rotate-180" />
      </button>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>
      <button
        className="absolute top-1/4 transform -translate-y-1/2 right-4  text-white p-2 rounded-full hover:bg-gray-600 transition"
        onClick={nextSlide}
      >
        {/* &#10095; */}
        <CarouselArrow />
      </button>
    </div>
  );
};

export default Carousel;
