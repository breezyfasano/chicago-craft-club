import axios from 'axios'
import { EVENTBRITE_HEADERS, EVENTBRITE_ORG_ID } from '../constants'
import manualEvents from './manualEvents.json'

export type FormattedEvent = {
  title: string
  date: string
  description: string
  link: string
  month: string
  id: string
}

export async function getAllEvents() {
  const formatEventData = () => {
    const events = manualEvents.length ? [...manualEvents] : []

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
  }

  const formattedData = formatEventData()
  return formattedData
}
