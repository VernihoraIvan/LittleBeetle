import { CarouselProps } from "@/utilities/interfaces";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMany = images.length > 1;

  const prevSlide = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextSlide = () =>
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div
      className="relative overflow-hidden bg-primPurple/5"
      aria-roledescription="carousel"
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1} of ${images.length}`}
            aria-hidden={index !== currentIndex}
            className="aspect-[4/3] w-full flex-shrink-0 object-cover md:aspect-auto md:h-full"
          />
        ))}
      </div>
      {hasMany && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            className="icon-btn absolute left-3 top-1/2 -translate-y-1/2 bg-primWhite/90 shadow-card hover:bg-primWhite"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            className="icon-btn absolute right-3 top-1/2 -translate-y-1/2 bg-primWhite/90 shadow-card hover:bg-primWhite"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show image ${index + 1}`}
                aria-current={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
                className={clsx(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-6 bg-primWhite"
                    : "w-2 bg-primWhite/60 hover:bg-primWhite/80"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
