import { SocialsList } from '../components/SocialsList'
import Layout from '../components/Layout'
import { MeetFriendsDoCrafts } from '../components/svg/MeetFriendsDoCrafts'
import { SnippetCard } from '../components/Cards/SnippetCard'

export default function Home() {
  return (
    <Layout>
      <header className='py-8 lg:py-12 bg-blue text-yellow'>
        <div className='container'>
          <MeetFriendsDoCrafts className='mx-auto w-full' />
        </div>
      </header>

      <section className={`w-full`}>
        <div className='container flex gap-x-12'>
          <div className='lg:w-1/2 text-md leading-8 font-semibold'>
            <p>
              welcome to the chicago craft club. we’re a group of passionate 18+
              artists and crafters from all over the creative spectrum living in
              the chicagoland area.
            </p>
            <p>
              this group is about meeting fellow crafters that are passionate
              about crafting and community, learning from each other, and just
              plain ol’ hanging out.
            </p>
            <p>
              The Chicago Craft Club is for <strong>everyone</strong> -
              regardless of disability, sexual orientation, gender identity,
              ethnicity, color, or origin.
            </p>
          </div>

          <div className='lg:w-1/2'>
            <SnippetCard
              heading='how to join the craft club'
              cta={{
                link: 'https://app.geneva.com/invite/3a4ab924-4f52-4b7a-b0d5-c234ba74ea39',
                text: 'Join on Geneva',
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

      <section className='w-full pt-0'>
        <div className='container'>
          <span className='block text-center text-xl font-sans font-black'>
            some of the things we like to do are...
          </span>
        </div>
      </section>

      <section className='callout bg-pink'>
        <div className='flex flex-wrap justify-center'>
          <div className='container'>
            <p>
              do you have an idea for an event? interested in volunteering? have
              a business inquiry?
            </p>
            <p>
              please contact us at{' '}
              <a href='mailto:hello@chicagocraft.club'>
                {' '}
                hello@chicagocraft.club
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
