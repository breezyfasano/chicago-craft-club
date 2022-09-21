export default function EventCard({ event }) {
  const prepareDate = new Date(event.date).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  return (
    <article className='bg-white rounded-md border-black border shadow-lg p-6 flex flex-col'>
      <h2 className='font-black text-blue'>{event.title}</h2>
      <div className='eventInfo my-3'>
        <p className='font-bold text-blue '>{prepareDate}</p>
        <p className='font-bold '>{event.time}</p>
        <p>{event.description}</p>
      </div>
      <div className='text-center'>
        <a
          href={event.link}
          target='_blank'
          rel='noreferrer'
          className='button'
        >
          View Details
        </a>
      </div>
    </article>
  )
}
