export default function Landing() {
  return (
    <main className="px-4">
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
    </main>
  );
}
