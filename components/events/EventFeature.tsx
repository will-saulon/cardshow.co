import { UpcomingShow } from '@/types/types';
import Image from 'next/image';

export default function EventFeature({ event }: { event: UpcomingShow }) {
  return (
    <article className="cursor-pointer hover:-translate-y-2 duration-300">
      <div className="sm:hidden flex">
        <Image
          src={event.image}
          alt={event.name}
          width={96}
          height={96}
          className="size-24 rounded-md object-cover"
        />
        <div className="px-4">
          <p className="font-bold">{event.name}</p>
          <p className="text-green-900">Sat, Mar 22</p>
          <p>{event.location}</p>
        </div>
      </div>
      <div className="hidden sm:flex flex-col gap-2">
        <Image
          src={event.image}
          alt={event.name}
          width={240}
          height={240}
          className="size-60 rounded-md object-cover"
        />
        <div>
          <p className="font-bold">{event.name}</p>
          <p><span className="text-green-900">Sat, Mar 22</span> <span>{event.location}</span></p>
        </div>
      </div>
    </article>
  )
}