import Layout from '../components/Layout'
import Link from 'next/link'
import { SnippetCard } from '../components/Cards/SnippetCard'
import { CalloutList } from '../components/CalloutList'
import { HomeHero } from '../components/Heroes/HomeHero'

export default function Home() {
  return (
    <Layout>
      <HomeHero />

      <section className={`w-full`}>
        <div className='container lg:flex-row flex-col flex gap-8 lg:gap-12'>
          <div className='lg:w-1/2 text-md leading-8 font-semibold'>
            <p>
              Welcome to the Chicago Craft Club! We&apos;re a group of
              passionate 18+ artists and crafters from all over the creative
              spectrum living in the Chicagoland area.
            </p>
            <p>
              This group is about meeting fellow crafters that are passionate
              about crafting and community, learning from each other, and just
              plain ol&apos; hanging out.
            </p>
            <p>
              The Chicago Craft Club is for <strong>everyone</strong> -
              regardless of disability, sexual orientation, age (as long as
              you&apos;re an adult), gender identity, ethnicity, color, or
              origin.
            </p>
          </div>

          <div className='lg:w-1/2'>
            <SnippetCard
              heading='how to join the craft club'
              cta={{
                link: '/events',
                text: 'View events',
              }}
            >
              <p className='font-sans text-base font-semibold'>
                Joining is as simple as signing up for our online community on
                Geneva and/or coming to one of our meetups.
              </p>
            </SnippetCard>
          </div>
        </div>
      </section>

      <CalloutList
        items={[
          { text: 'byoc* meetups', hoverText: 'bring your own craft meetups' },
          { text: 'share art supplies' },
          { text: 'teach each other' },
        ]}
      />

      <section className='callout bg-blue text-white'>
        <div className='flex flex-wrap justify-center'>
          <div className='container'>
            <p className='text-lg'>
              do you have an idea for an event? interested in volunteering? have
              a business inquiry?
            </p>
            <p className='text-lg'>
              please contact us at{' '}
              <Link
                href='mailto:hello@chicagocraft.club'
                className='hover:!text-pink'
              >
                hello@chicagocraft.club
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
