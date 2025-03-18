"use client"

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import EventCard from '../events/EventCard';
import { upcomingShows } from '@/data/upcoming-shows';

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
      perView: 2,
      spacing: 12
    }
  });

  return (
    <div ref={sliderRef} className="keen-slider mb-4">
      {upcomingShows.map((event, index) =>
        <EventCard
          key={index}
          className="keen-slider__slide"
          event={event}
        />
      )}
    </div>
  )
}