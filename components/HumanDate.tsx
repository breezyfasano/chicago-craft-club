import { format } from 'date-fns'
import { TZDate } from '@date-fns/tz'

export default function HumanDate({ isoDate }: { isoDate: string }) {
  const centralTimeZone = 'America/Chicago'

  // Convert ISO string to central time zone
  const tzDate = new TZDate(isoDate, centralTimeZone)

  // Format the date
  const formattedDate = format(tzDate, 'EEEE, MMMM d, yyyy')
  const formattedTime = format(tzDate, "h:mmaa 'CT'")

  return (
    <>
      <p className='font-bold text-blue'>{formattedDate}</p>
      <p className='text-gray font-bold'>{formattedTime}</p>
    </>
  )
}
