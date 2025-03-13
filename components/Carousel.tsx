"use client"

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import EventCard from './EventCard';

export default function Carousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 3.5,
          spacing: 12
        }
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4.5,
          spacing: 12
        }
      }
    },
    slides: {
      perView: 2.5,
      spacing: 12
    }
  });
  const sampleSlides = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div ref={sliderRef} className="keen-slider mb-4">
      {sampleSlides.map((slideNum) =>
        <EventCard
          key={slideNum}
          className="keen-slider__slide"
          slideNum={slideNum}
        />
      )}
    </div>
  )
}