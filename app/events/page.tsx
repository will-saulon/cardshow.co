import { upcomingShows } from "@/data/upcoming-shows";
import EventFeature from "@/components/events/EventFeature";

export default function Events() {
  return (
    <div className="py-8 px-4 flex flex-col gap-4">
      <div>SEARCH AND FILTER COMPONENTS</div>
      <div>TAGS</div>
      <h1 className="text-2xl font-semibold tracking-wide">Popular Events</h1>
      <div className="flex flex-col sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {upcomingShows.map((show, index) => (
          <EventFeature
            key={index}
            event={show}
          />
        ))}
      </div>
    </div>
  )
}