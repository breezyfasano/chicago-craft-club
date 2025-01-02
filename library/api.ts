import * as eventApi from './providers/manualEvents'

// Event Methods
export async function getAllEvents() {
  return eventApi.getAllEvents()
}
