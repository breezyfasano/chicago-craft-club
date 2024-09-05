import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import EventCard from '../components/Cards/EventCard'
import { getAllEvents } from '../library/api'
import PageHeader from '../components/PageHeader'
import type { FormattedEvent } from '../library/providers/eventbrite'

export default function Events({ events }: { events: FormattedEvent[] }) {
  return (
    <Layout
      metaTitle='Events and Meetups by Chicago Craft Club'
      metaDescription='Discover upcoming Chicago Craft Club events! Attend free meetups to connect with fellow crocheters, knitters, illustrators, and all other crafters alike.'
    >
      <PageHeader text='Our Events' />

      <section className='container flex flex-col justify-center'>
        <div className='w-full lg:w-3/4 lg:mx-auto'>
          <p>
            Below, you can see a calendar of our official events organized by us
            💞
          </p>
          <p>
            Join our{' '}
            <Link
              href='https://app.geneva.com/invite/3a4ab924-4f52-4b7a-b0d5-c234ba74ea39'
              className='link'
            >
              Geneva chatroom
            </Link>{' '}
            to see any community ran events! You can even host your own meetup
            or one-off event there.
          </p>
          <p className='font-bold'>All of our events are free to enter :)</p>
        </div>
      </section>

      <section className='container pt-0  flex flex-col justify-center'>
        <div className='flex flex-col gap-y-8 lg:gap-y-12 lg:w-3/4 mx-auto'>
          {events && Object.keys(events).length > 0 ? (
            Object.entries(events).map(([month, events]) => {
              return (
                <>
                  <h2 className='text-center text-2xl lg:text-3xl border-b-4 text-gray pb-3 lg:pb-6 font-display'>
                    {month}
                  </h2>
                  {Array.isArray(events) &&
                    events?.map((event: FormattedEvent) => {
                      return (
                        <>
                          <EventCard event={event} key={event.id} />
                        </>
                      )
                    })}
                </>
              )
            })
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

  return {
    props: {
      events: data,
    },
    revalidate: 60,
  }
}
