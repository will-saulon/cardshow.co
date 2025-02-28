import Carousel from "@/components/Carousel"
import LandingFeature from "@/components/LandingFeature";

export default function Landing() {
  return (
    <main className="px-4 space-y-16">
      <section className="flex flex-col items-center sm:flex-row-reverse ">
        {/* Insert hero image here */}
        <div className="text-center md:w-full">HERO IMAGE</div>
        <div>
          <h1 className="text-lg md:text-2xl font-bold mb-4">Find More Hobby Events You Love <span className="text-green-900">Every Weekend</span></h1>
          <p className="mb-6">Join the #1 community for card shows and hobby events. We make finding and booking shows easy.</p>
          <div className="flex flex-col items-center md:flex-row space-y-3 md:space-y-0 md:space-x-3">
            <button className="w-full bg-green-900 text-white rounded-full py-1">
              <a href="/create">Create Your Event</a>
            </button>
            <button className="w-full rounded-full py-1 border">
              <a href="/events">Browse Events</a>
            </button>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-lg font-bold mb-4">Trending</h2>
        <Carousel />
        <p className="mb-4">Check out the most popular shows in your city, from Sports and Pokemon to Comic Books and TCG.</p>
        <button className="rounded-full py-1 px-3 border">
          <a href="/events">See More</a>
        </button>
      </section>
      <LandingFeature
        heading="Free for Event Organizers, Forever"
        description="The #1 way to sell your tickets and vendor tables online. Lowest fees in the industry. Launch your event in under 5 minutes."
      />
      <LandingFeature
        heading="All Your Attendees & Vendors in One Place"
        description="Send invites and event updates to re-engage customers directly from your dashboard. Create custom groups by event category & attendance."
      />
      <LandingFeature
        heading="Showcase Your Special Guests & Vendors"
        description="Make it easy for attendees to preview programming ahead of time. Add guests in just a few clicks. Choose whether to highlight your vendors with their social links and photos."
      />
      <article>
        {/* Insert image here */}
        <div>IMAGE</div>
        <h3>Track Sales & Get Paid Daily</h3>
        <p>Monitor event performance in real-time. Sell tickets and get paid ahead of time, no more waiting until the day of your event.</p>
      </article>
      <article>
        <div className="flex">
          <div className="flex flex-col justify-center">
            {/* Insert icon here */}
            <div>ICON</div>
            <p>Scan</p>
          </div>
          <div className="flex flex-col justify-center">
            {/* Insert icon here */}
            <div>ICON</div>
            <p>Check-In</p>
          </div>
          <div className="flex flex-col justify-center">
            {/* Insert icon here */}
            <div>ICON</div>
            <p>Track</p>
          </div>
        </div>
        <h3>Mobile App</h3>
        <p>Scan attendee tickets and check in vendors with the Treasure mobile app.</p>
        <button>Download on the App Store</button>
      </article>
      <article>
        {/* Insert image here */}
        <div>IMAGE</div>
        <h3>Map Your Vendors & Attractions</h3>
        <p>Create an interactive map or upload your own to guide your attendees through the venue.</p>
      </article>
    </main>
  );
}
