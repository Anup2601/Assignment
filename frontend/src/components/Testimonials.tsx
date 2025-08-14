import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.jpg";

interface Testimonial {
  id: number;
  image: string;
}

const testimonials: Testimonial[] = [
  { id: 1, image: a1 },
  { id: 2, image: a2 },
  { id: 3, image: a1 },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full mx-auto p-6 bg-white rounded-2xl m-5">
      {/* Testimonial Content */}
      <div className="relative flex flex-col items-center text-center">
        <img
          src={testimonials[currentIndex].image}
          className="rounded-xl"
        />

        {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 absolute bottom-5">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`size-4 rounded-full ${
              index === currentIndex ? "bg-white" : "border border-white"
            }`}
          ></span>
        ))}
      </div>

        {/* Navigation Buttons Inside Image (Bottom Right) */}
        <div className="absolute bottom-5 right-5 flex gap-2">
          <button
            onClick={prevSlide}
            className="bg-white/80 backdrop-blur-sm border rounded-full p-2 shadow hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/80 backdrop-blur-sm border rounded-full p-2 shadow hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
