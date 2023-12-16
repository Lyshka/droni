import { useState, TouchEvent } from "react";

export const useSlide = <T>(slider: Array<T>) => {
  const [slide, setSlide] = useState(0);
  const [x, setX] = useState(0);

  const handlePrev = () => {
    if (slide < 1) {
      setSlide(slider.length - 1);
      return;
    }

    setSlide((prv) => prv - 1);
  };

  const handleNext = () => {
    if (slide > slider.length - 2) {
      setSlide(0);
      return;
    }

    setSlide((prv) => prv + 1);
  };

  const handleHover = (idx: number) => {
    setSlide(idx);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setX(touch.clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!x) {
      return;
    }

    const x2 = e.touches[0].clientX;
    const xDiff = x2 - x;

    if (xDiff > 0) {
      handlePrev();
    } else {
      handleNext();
    }

    setX(0);
  };

  return {
    slide,
    handlePrev,
    handleNext,
    handleHover,
    handleTouchStart,
    handleTouchMove,
  };
};
