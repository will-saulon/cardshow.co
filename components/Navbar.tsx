export default function Navbar() {
  return (
    <nav className="w-full bg-white text-black px-4 py-3 flex justify-between">
      {/* Insert logo here */}
      <div>LOGO</div>
      <div className="flex gap-8">
        <a href="/events" className="hidden sm:block">Events</a>
        <a href="/create-event" className="hidden sm:block">Create Events</a>
        <a href="/login" className="text-green-900 font-semibold">Login</a>
      </div>
    </nav>
  )
}