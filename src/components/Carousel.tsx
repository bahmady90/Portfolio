import { useState } from "react";
import Anker from "./Anker";
import Image from "./Image";

type Image = {
    src: string,
    alt: string,
    href: string
}

type CarouselProps = {
    images: Array<Image>
}

// i wanted the arrows of the carousel to be outside of the images. Since i couldnt get it done with the template-carousels i created my own carousel

export function Carousel({images} : CarouselProps) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("");


  function nextSlide ()  {
    // use of the modulo-operator to create a circular way of switching to the next slides
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //adding a class to the image for the animation 
    setFadeClass("animate-fade-right animate-once animate-ease-out");
    setTimeout(() => {
        setFadeClass("");
    }, 300)
  };

  function prevSlide ()  {
    // use of the modulo-operator to create a circular way of switching to the next slides
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    //adding a class to the image for the animation 
    setFadeClass("animate-fade-left animate-once animate-ease-out");
    setTimeout(() => {
        setFadeClass("");
    }, 300)
  };

  return (
    <div className="relative xl:w-[25rem] lg:w-[20rem] sm:w-[18rem] w-[12rem]">
      <div className="rounded-xl">
        <Anker href={images[currentIndex].href}>
          <Image src={images[currentIndex].src} alt={images[currentIndex].alt} fadeClass={fadeClass} />
        </Anker>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="!absolute top-1/2 left-[-3rem] xl:left-[-4rem] transform -translate-y-1/2 bg-transparent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 sm:h-8 w-6 sm:w-8 lg:h-10 lg:w-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="!absolute top-1/2 right-[-3rem] xl:right-[-4rem] transform -translate-y-1/2 bg-transparent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 sm:h-8 w-6 sm:w-8 lg:h-10 lg:w-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}

