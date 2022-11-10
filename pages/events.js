import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import EventCard from '../components/EventCard'
import { getAllEvents } from '../library/api'

import events from '../utils/data/events.json'

export default function Events({ events }) {
  return (
    <Layout>
      <header className='w-full flex justify-center bg-blue py-8'>
        <h1 className='text-pink'>Upcoming Events</h1>
      </header>
      <section className='container flex justify-center'>
        <div className='grid grid-cols-1 gap-10 py-4 lg:w-1/2 '>
          {events.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getAllEvents()
  return {
    props: {
      events: data,
    },
    revalidate: 60,
  }
}
