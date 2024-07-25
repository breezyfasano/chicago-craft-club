import axios from 'axios'
import { EVENTBRITE_HEADERS, EVENTBRITE_ORG_ID } from '../constants'

type eventData = {
  name: {
    text: string
  }
  start: {
    utc: string
  }
  description: {
    text: string
  }
  url: string
  id: string
}

export type FormattedEvent = {
  title: string
  date: string
  description: string
  link: string
  month: string
  id: string
}

export async function getAllEvents() {
  const { data } = await axios.get(
    `https://www.eventbriteapi.com/v3/organizations/${EVENTBRITE_ORG_ID}/events/?status=live&time_filter=current_future`,
    {
      headers: EVENTBRITE_HEADERS,
    }
  )

  const formatEventData = (eventData: eventData[]) => {
    // Initially format into a new array of objects
    const events = eventData.reduce<FormattedEvent[]>(
      (previousValue, event) => {
        let newItem = {
          title: event.name.text,
          date: event.start.utc,
          description: event.description.text,
          link: event.url,
          month: new Date(event.start.utc).toLocaleString('default', {
            month: 'long',
          }),
          id: event.id,
        }
        previousValue.push(newItem)
        return previousValue
      },
      []
    )

    // Group events by month
    // use reduce function
    const eventsByMonth: { [key: string]: FormattedEvent[] } = events.reduce(
      (acc, item) => {
        if (!acc[item?.month]) {
          acc[item.month] = []
        }
        acc[item.month].push(item)
        return acc
      },
      {} as { [key: string]: FormattedEvent[] }
    )

    return eventsByMonth
    // Return final array of events by month
  }

  const formattedData = formatEventData(data.events)
  return formattedData
}
