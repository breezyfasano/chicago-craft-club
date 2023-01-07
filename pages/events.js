import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import EventCard from '../components/EventCard'
import { getAllEvents } from '../library/api'
import PageHeader from '../components/PageHeader'

export default function Events({ events }) {
  return (
    <Layout>
      <PageHeader text='Upcoming events' />
      <section className='container flex justify-center'>
        <div className='grid grid-cols-1 gap-10 py-4 lg:w-1/2 '>
          {events.length ? (
            events.map((event, index) => (
              <EventCard event={event} key={index} />
            ))
          ) : (
            <strong className='text-2xl'>
              Sorry, there are no events scheduled at this time. Check back
              soon, and join the Geneva group for community events!
            </strong>
          )}
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
