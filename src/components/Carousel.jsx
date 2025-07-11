"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Slide = ({ slide }) => {
  const { title, button, src, issuer, link } = slide;

  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col sm:flex-row items-center justify-center w-full max-w-4xl h-auto mx-auto p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800"
    >
      <img
        src={src}
        alt={title}
        className="w-full sm:w-1/2 h-64 object-cover rounded-xl shadow-md mb-4 sm:mb-0 sm:mr-6"
      />
      <div className="text-left space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{issuer}</p>
        <a
          href={link}
          target="_blank"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          {button}
        </a>
      </div>
    </motion.div>
  );
};

const CarouselControl = ({ type, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full transition hover:-translate-y-1 active:translate-y-1 duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
    >
      <IconArrowNarrowRight className="text-gray-800 dark:text-white" />
    </button>
  );
};

export function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden min-h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <Slide key={slides[current].title} slide={slides[current]} />
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-6 mt-6">
        <CarouselControl type="previous" handleClick={handlePreviousClick} />
        <CarouselControl type="next" handleClick={handleNextClick} />
      </div>
    </div>
  );
}
