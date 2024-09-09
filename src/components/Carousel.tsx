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
      className="relative w-full xxl:max-w-2xl  overflow-hidden
    xl:w-[490px]
    lg:min-w-[360px]
    md:h-[300px]"
    >
      <button
        className="absolute z-10 xxl:top-1/2 transform -translate-y-1/2 left-4  text-white p-2 rounded-full hover:bg-gray-600 transition
        xl:top-1/2
        lg:top-[14%]
        md:top-1/2"
        //top-1/2 transform -translate-y-1/2 left-0  text-white p-2 rounded-full hover:bg-gray-600 transition
        onClick={prevSlide}
      >
        {/* &#10094; */}
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
            className="w-full flex-shrink-0 h-auto object-cover"
          />
        ))}
      </div>
      <button
        className="absolute xxl:top-1/2 transform -translate-y-1/2 right-4  text-white p-2 rounded-full hover:bg-gray-600 transition
        xl:top-1/2
        lg:top-[14%]
        md:top-1/2"
        onClick={nextSlide}
      >
        {/* &#10095; */}
        <CarouselArrow />
      </button>
    </div>
  );
};

export default Carousel;
