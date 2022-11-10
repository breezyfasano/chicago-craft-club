import axios from 'axios'
import { EVENTBRITE_HEADERS, EVENTBRITE_ORG_ID } from '../constants'

export async function getAllEvents() {
  const { data } = await axios.get(
    `https://www.eventbriteapi.com/v3/organizations/${EVENTBRITE_ORG_ID}/events/?status=live&time_filter=current_future`,
    {
      headers: EVENTBRITE_HEADERS,
    }
  )

  const formatEventData = (eventData) => {
    return eventData.reduce((previousValue, event) => {
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
  }

  const formattedData = formatEventData(data.events)
  {
    return formattedData
  }
}
