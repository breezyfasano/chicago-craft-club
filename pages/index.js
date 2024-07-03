import { SocialsList } from '../components/SocialsList'
import Layout from '../components/Layout'
import { MeetFriendsDoCrafts } from '../components/svg/MeetFriendsDoCrafts'
import { SnippetCard } from '../components/Elements/SnippetCard'

export default function Home() {
  return (
    <Layout>
      <header className='py-8 lg:py-12 bg-blue text-yellow'>
        <div className='container'>
          <MeetFriendsDoCrafts className='mx-auto w-full' />
        </div>
      </header>

      <section className={`w-full`}>
        <div className='container'>
          <SnippetCard>Hello</SnippetCard>
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
        </div>
      </section>

      <section className={`join `}>
        <div className='container'>
          <div className='flex flex-wrap justify-center'>
            <h1>how to join</h1>
            <p className='lg:mb-8'>
              The Chicago Craft Club is for <strong>everyone</strong> -
              regardless of disability, sexual orientation, gender identity,
              ethnicity, color, or origin. Plus, joining is just as simple as
              checking us out on the platform(s) of your choice!
            </p>
          </div>
          <div className='flex flex-wrap justify-center'>
            <SocialsList />
          </div>
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
