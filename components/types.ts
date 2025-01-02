import { SanityFormattedEvent } from '../library/providers/sanitycms'

export type Event = SanityFormattedEvent & { humanDate?: string }
