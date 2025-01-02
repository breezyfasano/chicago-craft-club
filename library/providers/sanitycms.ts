import { SANITY_API_TOKEN } from '../constants'
import { createClient, type QueryParams } from 'next-sanity'
import { dataset, projectId } from '../constants'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-24',
  token: SANITY_API_TOKEN,
  useCdn: false,
  perspective: 'published',
})

// use this function in page rendering
// transform data to fit EventCard in events.tsx
export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60,
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) {
  return client.fetch(query, params, {
    next: {
      revalidate: revalidate,
    },
  })
}

export type SanityFormattedEvent = {
  name: string
  start: string
  summary: string
  url: string
  _id: string
}
