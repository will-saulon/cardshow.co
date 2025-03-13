import { UpcomingShow } from '@/types/types';
import Image from 'next/image';

export default function EventCard({ className, event }: { className: string, event: UpcomingShow }) {
  return (
    <article className={`${className} border border-black flex flex-col h-[250px] rounded-md`}>
      <div className="relative flex-[0_0_80%]">
        <Image
          src={event.image}
          alt={event.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-2 text-xs flex-[0_0_20%]">
        <p className="font-bold">{event.name}</p>
        <p>{event.location}</p>
      </div>
    </article>
  )
}