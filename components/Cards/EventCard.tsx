import type { Event } from '../types'
import HumanDate from '../../components/HumanDate'

type EventCardProps = {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const dateStructure = new Date(event.start)

  // Get individual components of the date
  const year = dateStructure.getFullYear()
  const month = dateStructure.getMonth() + 1 // Months are 0-indexed
  const day = dateStructure.getDate()
  const hours = dateStructure.getHours()
  const minutes = dateStructure.getMinutes()
  const seconds = dateStructure.getSeconds()

  // Format the date as a human-readable string
  const humanDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
  return (
    <article className='bg-white rounded-md border-black border-2 shadow-lg p-6 flex flex-col justify-between'>
      <h2 className='font-black text-blue'>{event.name}</h2>
      <div className='eventInfo my-3'>
        <HumanDate isoDate={dateStructure.toISOString()} />
        {/* <p className='font-bold '>{event.time}</p> */}
        <p>{event.summary}</p>
      </div>
      <div className='text-center'>
        <a
          href={event.url}
          target='_blank'
          rel='noreferrer'
          className='button hover:font-bold mt-4'
        >
          View Details
        </a>
      </div>
    </article>
  )
}
