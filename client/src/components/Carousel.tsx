import React, { useState } from "react";
import data from "../images.json";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

interface Image {
  id: number;
  src: string;
  alt: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const images: Image[] = data.images;

  const prevSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 focus:outline-none hover:text-gray-200 rounded-full p-3 text-gray-500"
        onClick={prevSlide}
      >
        <BsFillArrowLeftCircleFill className="w-20 h-10" />
      </button>
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="h-full w-full object-cover object-center"
      />
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 focus:outline-none hover:text-gray-200  rounded-full p-3 text-gray-500"
        onClick={nextSlide}
      >
        <BsFillArrowRightCircleFill className="w-20 h-10" />
      </button>
    </div>
  );
};

export default Carousel;
