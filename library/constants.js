// Eventbrite Constants
export const EVENTBRITE_API_TOKEN = process.env.EVENTBRITE_API_TOKEN
export const EVENTBRITE_ORG_ID = process.env.EVENTBRITE_ORG_ID

export const EVENTBRITE_HEADERS = {
  Authorization: `Bearer ${process.env.EVENTBRITE_API_TOKEN}`,
}
