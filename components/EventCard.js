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
    <article className='w-full eventCard container lg:max-w-2xl relative bg-white rounded-md border-black border-2 shadow-lg md:pl-16 py-6'>
      <div className='bg-pink border-2 rounded-md md:w-24 md:h-24 flex justify-center items-center  flex-row gap-x-2 md:gap-x-0 md:flex-col md:absolute md:-top-8 md:-left-12 font-bold mb-3 md:mb-0 py-2 md:py-0'>
        <span className='block'>{eventDate.weekday}</span>
        <span className='block'>{eventDate.day}</span>
      </div>

      <h2 className='font-bold text-blue m-0 leading-12'>{title}</h2>
      <div className='eventInfo mb-4'>
        <p className='pb-4 leading-6 text-blue font-bold'>{prepareTime}</p>
        <p className='p-0 leading-8'>{description}</p>
      </div>
      <div className='flex gap-x-6'>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='button secondary'
        >
          RSVP here
        </a>

        {/* <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='button secondary'
        >
          Add to calendar
        </a> */}
      </div>
    </article>
  )
}
