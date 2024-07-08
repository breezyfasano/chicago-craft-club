import type { Event } from './types'

type EventCardProps = {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const prepareDate = new Date(event.date).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const prepareTime = Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date(event.time))
  return (
    <article className='bg-white rounded-md border-black border shadow-lg p-6 flex flex-col justify-between'>
      <h2 className='font-black text-blue'>{event.title}</h2>
      <div className='eventInfo my-3'>
        <p className='font-bold text-blue '>{prepareDate}</p>
        <p className='font-bold '>{prepareTime}</p>
        <p>{event.description}</p>
      </div>
      <div className='text-center'>
        <a
          href={event.link}
          target='_blank'
          rel='noreferrer'
          className='button hover:font-semibold'
        >
          View Details
        </a>
      </div>
    </article>
  )
}
