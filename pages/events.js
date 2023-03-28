import React from 'react'
import Layout from '../components/Layout'
import EventCard from '../components/EventCard'
import { getAllEvents } from '../library/api'
import PageHeader from '../components/PageHeader'
import Calendar from '@ericz1803/react-google-calendar'
import { css } from '@emotion/react'

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_CAL_API_TOKEN
let calendars = [
  { calendarId: process.env.NEXT_PUBLIC_OFFICIAL_EVENT_CAL_ID },
  {
    calendarId: process.env.NEXT_PUBLIC_CRAFTY_FUN_CAL_ID,
    color: '#B241D1', //optional, specify color of calendar 2 events
  },
]

let styles = {
  //you can use object styles (no import required)
  calendar: css`
    background-color: #fff;
    .calendar-title {
      color: red;
      font-weight: bold;
    }
    .calendar-footer {
      display: none;
    }
  `,
}

export default function Events({ events }) {
  return (
    <Layout>
      <PageHeader text='Our Events' />

      <section className='container flex flex-col justify-center'>
        <h2 className='font-bold text-center mb-4'>Calendar</h2>
        <div>
          <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
        </div>
      </section>

      <section className='container flex flex-col justify-center'>
        <h2 className='font-bold text-center'>Upcoming Official Events</h2>
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
