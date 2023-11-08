import axios from 'axios'
import { EVENTBRITE_HEADERS, EVENTBRITE_ORG_ID } from '../constants'

export async function getAllEvents() {
  // const { data } = await axios.get(
  //   `https://www.eventbriteapi.com/v3/organizations/${EVENTBRITE_ORG_ID}/events/?status=live&time_filter=current_future`,
  //   {
  //     headers: EVENTBRITE_HEADERS,
  //   }
  // )

  const data = [
    {
      name: {
        text: 'Chicago Craft Club x Second Shift: Bring Your Own Craft Meetup',
        html: 'Chicago Craft Club x Second Shift: Bring Your Own Craft Meetup',
      },
      description: {
        text: 'The Chicago Craft Club is excited to  be back at Second Shift for a bring-your-own-craft meetup!',
        html: 'The Chicago Craft Club is excited to  be back at Second Shift for a bring-your-own-craft meetup!',
      },
      url: 'https://www.eventbrite.com/e/chicago-craft-club-x-second-shift-bring-your-own-craft-meetup-tickets-750944724887',
      start: {
        timezone: 'America/Chicago',
        local: '2023-11-08T17:30:00',
        utc: '2023-11-08T23:30:00Z',
      },
      end: {
        timezone: 'America/Chicago',
        local: '2023-11-08T20:00:00',
        utc: '2023-11-09T02:00:00Z',
      },
      organization_id: '907946212383',
      created: '2023-11-02T18:22:29Z',
      changed: '2023-11-02T18:50:12Z',
      published: '2023-11-02T18:50:12Z',
      capacity: 100,
      capacity_is_custom: true,
      status: 'live',
      currency: 'USD',
      listed: true,
      shareable: true,
      invite_only: false,
      online_event: false,
      show_remaining: false,
      tx_time_limit: 1200,
      hide_start_date: false,
      hide_end_date: false,
      locale: 'en_US',
      is_locked: false,
      privacy_setting: 'unlocked',
      is_series: false,
      is_series_parent: false,
      inventory_type: 'limited',
      is_reserved_seating: false,
      show_pick_a_seat: false,
      show_seatmap_thumbnail: false,
      show_colors_in_seatmap_thumbnail: false,
      source: 'auto_create',
      is_free: true,
      version: null,
      summary:
        'The Chicago Craft Club is excited to  be back at Second Shift for a bring-your-own-craft meetup!',
      facebook_event_id: null,
      logo_id: '633870269',
      organizer_id: '45724696943',
      venue_id: '182490549',
      category_id: '119',
      subcategory_id: '19005',
      format_id: '9',
      id: '750944724887',
      resource_uri: 'https://www.eventbriteapi.com/v3/events/750944724887/',
      is_externally_ticketed: false,
      logo: {
        crop_mask: [Object],
        original: [Object],
        id: '633870269',
        url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F633870269%2F168375500455%2F1%2Foriginal.20230831-182708?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C940%2C470&s=f7e931885d13dca3a4564e9a6b76e183',
        aspect_ratio: '2',
        edge_color: '#d9b2f4',
        edge_color_set: true,
      },
    },
    {
      name: {
        text: 'Pilot Project Brewing x Chicago Craft Club: Bring Your Own Craft Meetup',
        html: 'Pilot Project Brewing x Chicago Craft Club: Bring Your Own Craft Meetup',
      },
      description: {
        text: 'Join us for coffee and crafts at Pilot Project Brewing!',
        html: 'Join us for coffee and crafts at Pilot Project Brewing!',
      },
      url: 'https://www.eventbrite.com/e/pilot-project-brewing-x-chicago-craft-club-bring-your-own-craft-meetup-tickets-752367570657',
      start: {
        timezone: 'America/Chicago',
        local: '2023-11-18T11:00:00',
        utc: '2023-11-18T17:00:00Z',
      },
      end: {
        timezone: 'America/Chicago',
        local: '2023-11-18T13:00:00',
        utc: '2023-11-18T19:00:00Z',
      },
      organization_id: '907946212383',
      created: '2023-11-04T16:40:37Z',
      changed: '2023-11-04T17:13:00Z',
      published: '2023-11-04T17:13:00Z',
      capacity: 70,
      capacity_is_custom: true,
      status: 'live',
      currency: 'USD',
      listed: true,
      shareable: true,
      invite_only: false,
      online_event: false,
      show_remaining: false,
      tx_time_limit: 1200,
      hide_start_date: false,
      hide_end_date: false,
      locale: 'en_US',
      is_locked: false,
      privacy_setting: 'unlocked',
      is_series: false,
      is_series_parent: false,
      inventory_type: 'limited',
      is_reserved_seating: false,
      show_pick_a_seat: false,
      show_seatmap_thumbnail: false,
      show_colors_in_seatmap_thumbnail: false,
      source: 'coyote',
      is_free: true,
      version: null,
      summary: 'Join us for coffee and crafts at Pilot Project Brewing!',
      facebook_event_id: null,
      logo_id: '526396899',
      organizer_id: '45724696943',
      venue_id: '182759789',
      category_id: '119',
      subcategory_id: '19003',
      format_id: '11',
      id: '752367570657',
      resource_uri: 'https://www.eventbriteapi.com/v3/events/752367570657/',
      is_externally_ticketed: false,
      logo: {
        crop_mask: [Object],
        original: [Object],
        id: '526396899',
        url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F526396899%2F168375500455%2F1%2Foriginal.20230531-191755?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=d9d02f2acdba731c3edf350ff92b35f9',
        aspect_ratio: '2',
        edge_color: '#dbc64a',
        edge_color_set: true,
      },
    },
    {
      name: {
        text: 'Chicago Craft Club x Second Shift: Bring Your Own Craft Meetup',
        html: 'Chicago Craft Club x Second Shift: Bring Your Own Craft Meetup',
      },
      description: {
        text: 'The Chicago Craft Club is excited to  be back at Second Shift for a bring-your-own-craft meetup!',
        html: 'The Chicago Craft Club is excited to  be back at Second Shift for a bring-your-own-craft meetup!',
      },
      url: 'https://www.eventbrite.com/e/chicago-craft-club-x-second-shift-bring-your-own-craft-meetup-tickets-750944724887',
      start: {
        timezone: 'America/Chicago',
        local: '2023-12-08T17:30:00',
        utc: '2023-12-08T23:30:00Z',
      },
      end: {
        timezone: 'America/Chicago',
        local: '2023-11-08T20:00:00',
        utc: '2023-11-09T02:00:00Z',
      },
      organization_id: '907946212383',
      created: '2023-11-02T18:22:29Z',
      changed: '2023-11-02T18:50:12Z',
      published: '2023-11-02T18:50:12Z',
      capacity: 100,
      capacity_is_custom: true,
      status: 'live',
      currency: 'USD',
      listed: true,
      shareable: true,
      invite_only: false,
      online_event: false,
      show_remaining: false,
      tx_time_limit: 1200,
      hide_start_date: false,
      hide_end_date: false,
      locale: 'en_US',
      is_locked: false,
      privacy_setting: 'unlocked',
      is_series: false,
      is_series_parent: false,
      inventory_type: 'limited',
      is_reserved_seating: false,
      show_pick_a_seat: false,
      show_seatmap_thumbnail: false,
      show_colors_in_seatmap_thumbnail: false,
      source: 'auto_create',
      is_free: true,
      version: null,
      summary:
        'The Chicago Craft Club is excited to  be back at Second Shift for a bring-your-own-craft meetup!',
      facebook_event_id: null,
      logo_id: '633870269',
      organizer_id: '45724696943',
      venue_id: '182490549',
      category_id: '119',
      subcategory_id: '19005',
      format_id: '9',
      id: '750944724887',
      resource_uri: 'https://www.eventbriteapi.com/v3/events/750944724887/',
      is_externally_ticketed: false,
      logo: {
        crop_mask: [Object],
        original: [Object],
        id: '633870269',
        url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F633870269%2F168375500455%2F1%2Foriginal.20230831-182708?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C940%2C470&s=f7e931885d13dca3a4564e9a6b76e183',
        aspect_ratio: '2',
        edge_color: '#d9b2f4',
        edge_color_set: true,
      },
    },
  ]

  const formatEventData = (eventData) => {
    const formattedEvents = eventData.reduce((previousValue, event) => {
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

    const sortEventsByMonth = (events) => {
      const eventsByMonth = {}

      events.forEach((event) => {
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

  console.log(formattedData)
  {
    return formattedData
  }
}

// [
//   {
//     month: 'October',
//     events: [...]
//   }
// ]
