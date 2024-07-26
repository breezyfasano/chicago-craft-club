export const formatDate = (date: Date) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat']
  const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  let eventDate
  return (eventDate = {
    weekday: daysOfWeek[date.getDay()],
    month: monthsOfYear[date.getMonth()],
    day: date.getDate(),
  })
}
