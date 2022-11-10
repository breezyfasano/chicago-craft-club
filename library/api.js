import * as eventApi from './providers/eventbrite'

// Event Methods
export async function getAllEvents() {
  return eventApi.getAllEvents()
}
