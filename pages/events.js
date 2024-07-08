import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import EventCard from '../components/Cards/EventCard'
import { getAllEvents } from '../library/api'
import PageHeader from '../components/PageHeader'

export default function Events({ events }) {
  return (
    <Layout>
      <PageHeader text='Our Events' />

      <section className='container flex flex-col justify-center'>
        <div className='w-full lg:w-3/4 lg:mx-auto'>
          <p>Below, you can see a calendar of our official events 💞</p>
          <p>
            Join our{' '}
            <Link
              href='https://app.geneva.com/invite/3a4ab924-4f52-4b7a-b0d5-c234ba74ea39'
              className='link'
            >
              Geneva chatroom
            </Link>{' '}
            to see any community ran events! You can even host your own meetup
            or one-off event there. 👀
          </p>
        </div>
      </section>

      <section className='container pt-0 flex flex-col justify-center'>
        <h2 className='font-bold text-center text-blue'>
          Upcoming Official Events
        </h2>
        <div className='grid grid-cols-1 gap-6 py-4 lg:grid-cols-3'>
          {events.length ? (
            events.map((event, index) => (
              <EventCard event={event} key={index} />
            ))
          ) : (
            <div className='col-span-3'>
              <p className='text-lg text-center'>
                Sorry, there are no events scheduled at this time.
              </p>
              <p className='text-lg text-center'>
                Check back soon, and join the{' '}
                <Link
                  href='https://app.geneva.com/invite/3a4ab924-4f52-4b7a-b0d5-c234ba74ea39'
                  className='link'
                >
                  Geneva group
                </Link>{' '}
                for community events!
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getAllEvents()
  // const data = EventData;

  return {
    props: {
      events: data,
    },
    revalidate: 60,
  }
}
