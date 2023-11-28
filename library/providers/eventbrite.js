import axios from 'axios'
import { EVENTBRITE_HEADERS, EVENTBRITE_ORG_ID } from '../constants'

//TODO:
// Refactor using map, sort, and reduce to avoid iterating twice.

export async function getAllEvents() {
  const { data } = await axios.get(
    `https://www.eventbriteapi.com/v3/organizations/${EVENTBRITE_ORG_ID}/events/?status=live&time_filter=current_future`,
    {
      headers: EVENTBRITE_HEADERS,
    }
  )

  const formatEventData = (eventData) => {
    const formattedEvents = eventData?.length
      ? eventData.reduce((previousValue, event) => {
          let newItem = {
            title: event.name.text,
            date: event.start.utc,
            time: event.start.utc,
            description: event.description.text,
            link: event.url,
          }
          previousValue.push(newItem)
          return previousValue
        }, [])
      : null

    const sortEventsByMonth = (events) => {
      const eventsByMonth = {}

      events?.forEach((event) => {
        const month = new Date(event.date).toLocaleString('default', {
          month: 'long',
        })

        if (!eventsByMonth[month]) {
          eventsByMonth[month] = []
        }

        eventsByMonth[month].push(event)
      })

      let eventsByMonthKeys = Object.keys(eventsByMonth)

      const sortedEvents = eventsByMonthKeys.map((key) => {
        return {
          month: key,
          events: eventsByMonth[key],
        }
      })

      return sortedEvents
    }
    return sortEventsByMonth(formattedEvents)
  }

  const formattedData = formatEventData(data)

  {
    return formattedData
  }
}
