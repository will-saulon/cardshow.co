export default function EventCard({ className, slideNum }: { className: string, slideNum: number }) {
  return (
    <article className={`${className} border border-black flex flex-col h-[162px] rounded-md`}>
      {/* Insert event image here */}
      <p className="h-3/4">IMAGE</p>
      <div className="p-2">
        <p className="font-bold">Event {slideNum}</p>
        <p>Location {slideNum}</p>
      </div>
    </article>
  )
}