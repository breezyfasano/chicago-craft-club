import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <header className={`header`}>
        <div>
          {/* fix this extra div shit it sucks */}
          <div className='w-full flex justify-center items-center pb-10 lg:pb-0'>
            <div className='w-full md:w-2/3 max-w-xs lg:max-w-lg px-4'>
              <Image
                src='/logo-web.svg'
                width={450}
                height={450}
                alt='Chicago Craft Club'
                className='max-w-xs'
              ></Image>
            </div>
            <div className='hidden md:block md:w-1/3 pr-4 pl-4'>
              <Image
                src='/stars.svg'
                width={189}
                height={585}
                alt='Meet friends, do crafts, leave your home!'
              ></Image>
            </div>
          </div>
        </div>
      </header>

      <section className={`w-full flex justify-center`}>
        <div className='flex justify-center flex-col lg:flex-row w-full lg:w-3/4 2xl:w-2/5'>
          <div className='flex lg:block justify-center w-full p-0 mb-5 lg:mb-0 lg:w-1/6 '>
            <Image src='/hi.svg' width={126} height={116} alt='hi!' />
          </div>
          <div className='w-full lg:w-5/6'>
            <p>
              welcome to the chicago craft club. we’re a group of passionate
              artists and crafters from all over the creative spectrum living in
              the chicagoland area.
            </p>
            <p>
              this group is about meeting fellow crafters that are passionate
              about crafting and community, learning from each other, and just
              plain ol’ hanging out.
            </p>
          </div>
        </div>
      </section>

      <section className={`join w-full`}>
        <div className='lg:w-3/4 2xl:w-2/5 mx-auto'>
          <div className='flex flex-wrap justify-center'>
            <h1>how to join</h1>
            <p className='lg:mb-8'>
              The Chicago Craft Club is for <strong>everyone</strong> -
              regardless of disability, sexual orientation, gender identity,
              ethnicity, age, color, or origin. Plus, joining is just as simple
              as checking us out on the platform(s) of your choice!
            </p>
          </div>
          <div className='flex flex-wrap justify-center'>
            <ul className='socialsList justify-center'>
              <li>
                <a
                  href='https://www.facebook.com/groups/1233181850502151'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image
                    src='/icons/facebook.svg'
                    width={53}
                    height={53}
                    alt='Facebook'
                  ></Image>
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/chicagocraftingclub/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image
                    src='/icons/instagram.svg'
                    width={53}
                    height={53}
                    alt='Instagram'
                  ></Image>
                </a>
              </li>
              <li>
                <a
                  href='https://discord.gg/ekJwuzzF3T'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image
                    src='/icons/discord.svg'
                    width={53}
                    height={53}
                    alt='Discord'
                  ></Image>
                </a>
              </li>
              <li>
                <a
                  href='https://www.tiktok.com/@chicagocraftclub'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image
                    src='/icons/tiktok.svg'
                    width={53}
                    height={53}
                    alt='Tiktok'
                  ></Image>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='callout'>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full lg:w-2/3'>
            <p>
              do you have an idea for an event? interested in volunteering? have
              a business inquiry?
            </p>
            <p>
              please contact us at{' '}
              <a href='mailto:chicagocraftingclub@gmail.com'>
                {' '}
                chicagocrafting&#8203;club@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
