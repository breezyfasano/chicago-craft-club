import { formatDate } from '../utils/data/functions/formatDate'

export default function EventCard({ event }) {
  const { title, date, time, description, link } = event

  // const prepareDate = new Date(date).toLocaleDateString('en-us', {
  //   weekday: 'long',
  //   year: 'numeric',
  //   month: 'short',
  //   day: 'numeric',
  // })

  const prepareTime = Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date(time))

  const eventDate = formatDate(new Date(date))

  return (
    <article className='eventCard relative bg-white rounded-md border-black border-2 shadow-lg pl-16 py-6'>
      <div className='bg-pink border-2 rounded-md w-24 h-24 flex justify-center items-center flex-col absolute -top-8 -left-12'>
        <span className='block'>{eventDate.weekday}</span>
        <span className='block'>{eventDate.day}</span>
      </div>

      <h2 className='font-bold text-blue m-0 leading-12'>{title}</h2>
      <div className='eventInfo my-4'>
        <p className='p-0 leading-8'>{description}</p>
      </div>
      <div className='flex gap-x-6'>
        <a href={link} target='_blank' rel='noreferrer' className='button'>
          RSVP here
        </a>

        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='button secondary'
        >
          Add to calendar
        </a>
      </div>
    </article>
  )
}
