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
    <div
      className="relative w-full   overflow-hidden
"
    >
      <button
        className="absolute z-10 bottom-1/2 transform translate-y-1/2 left-1  text-white p-2 rounded-full hover:bg-gray-600 transition
        "
        onClick={prevSlide}
      >
        <CarouselArrow className="transform rotate-180" />
      </button>
      <div
        className="flex transition-transform duration-500 ease-in-out h-full "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 h-auto object-cover rounded-md"
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-1  text-white p-2 rounded-full hover:bg-gray-600 transition
       "
        onClick={nextSlide}
      >
        <CarouselArrow />
      </button>
    </div>
  );
};

export default Carousel;
