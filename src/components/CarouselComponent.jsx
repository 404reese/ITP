import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";

const carouselData = [
  {
    id: 1,
    title: "Industrial Automation Solutions",
    description: "Engineering Efficiency Through Smart Industrial Distribution",
    image: logo1,
  },
  {
    id: 2,
    title: "Digital Manufacturing",
    description:
      "Transform your manufacturing process with IoT, AI, and real-time analytics.",
    image: logo2,
  },
  {
    id: 3,
    title: "Trading Solutions",
    description:
      "Implement Industry 4.0 with predictive maintenance and intelligent automation.",
    image: logo3,
  },
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
              <p className="text-sm md:text-lg mt-3 md:mt-5 max-w-xl">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 md:p-4 rounded-full text-white hover:bg-black transition"
      >
        <FaChevronLeft size={20} className="md:size-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 md:p-4 rounded-full text-white hover:bg-black transition"
      >
        <FaChevronRight size={20} className="md:size-6" />
      </button>
    </div>
  );
};

export default CarouselComponent;
