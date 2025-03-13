interface Props {
  heading: string
  description: string
}

export default function LandingFeature({ heading, description }: Props) {
  return (
    <section>
      {/* Insert image here, passed in as prop */}
      <div>IMAGE</div>
      <h3>{heading}</h3>
      <p>{description}</p>
      <div className="flex flex-col items-center md:flex-row space-y-3 md:space-y-0 md:space-x-3">
        <button className="w-full bg-green-900 text-white rounded-full py-1">
          <a href="/create">Create Your Event</a>
        </button>
        <button className="w-full rounded-full py-1 border">
          <a href="/events">Browse Events</a>
        </button>
      </div>
    </section>
  )
}