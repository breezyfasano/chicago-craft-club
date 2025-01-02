import { format } from 'date-fns'
import { TZDate } from '@date-fns/tz'

export default function HumanDate({ isoDate }: { isoDate: string }) {
  const centralTimeZone = 'America/Chicago'

  // Convert ISO string to central time zone
  const tzDate = new TZDate(isoDate, centralTimeZone)

  // Format the date
  const formattedDate = format(tzDate, "MMMM d, yyyy 'at' h:mmaaaa")

  return formattedDate
}
