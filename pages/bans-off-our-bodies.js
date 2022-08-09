import Image from 'next/image'
import Link from 'next/link'
import fsPromises from 'fs/promises'
import path from 'path'
import Layout from '../components/Layout'
import VendorCard from '../components/VendorCard'

export default function BansOffOurBodies({ vendors }) {
  return (
    <Layout>
      <section className='w-full flex justify-center bg-boobs-pink'>
        <Image
          src='/boobs-logo.svg'
          width={500}
          height={283}
          alt='Bans Off Our Bodies: Craft Fair For Reproductive Rights'
        ></Image>
      </section>
      <section className='container lg:pb-0'>
        <p>{`Art and crafting has always been a direct expression of our deepest selves, and "political". It has been an expression of humanity, of love, of pain, of rebellion, of joy... and now it's time to express outrage and love toward those of us with uteruses that deserve the right to their own body.`}</p>
        <p>{`With your help, we'll be throwing this event to benefit 2 organizations: The Chicago Abortion Fund and the Midwest Access Coalition!`}</p>
      </section>
      <section className='w-full'>
        <h1 className='text-boobs-hotpink'>Event Information</h1>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div>
            <p className='font-bold'>
              Second Shift Coworking Space <br />
              3432 W Diversey Ave floor 2, Chicago, IL 60647
              <br />
              August 12, 7:00PM to 9:30PM
            </p>
            <p>
              {`We'll have... `}
              <br />
              CRAFT VENDORS! RAFFLE BASKETS! FUN MUSIC!
            </p>
            <p>
              <strong className='text-boobs-hotpink'>Parking Info:</strong>{' '}
              There is street parking only, located west of the building. Do not
              park in any lots; you will be at risk of being towed.
            </p>
            <p>
              <strong className='text-boobs-hotpink'>COVID-19 Policy:</strong>{' '}
              Masks will be REQUIRED for this event, per Second Shift venue
              policy and Chicago Craft Club indoor meetup policy.
            </p>
            <p>
              <strong className='text-boobs-hotpink'>Accessibility:</strong>{' '}
              Traversal of 1 flight of stairs is required to get to the space,
              and there is no elevator. The space is not wheelchair accessible.
            </p>
            <div className='flex justify-center'>
              <div className='space-x-4 mt-6'>
                <Link href='/docs/bans-off-our-bodies-poster.pdf'>
                  <a className='btn primary'>PDF Poster</a>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11877.4924119476!2d-87.6675072!3d41.906337449999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcd74732ae4ed%3A0x8b79884490f8e100!2sSecond%20Shift!5e0!3m2!1sen!2sus!4v1659644067447!5m2!1sen!2sus'
              width='600'
              height='450'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='max-w-full w-full border-2 shadow-md mx-auto'
            ></iframe>
          </div>
        </div>
      </section>
      <section className='containerv flex flex-col justify-center'>
        <h1 className='text-boobs-hotpink'>Vendors</h1>
        <div className='container grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto'>
          {vendors.map((vendor) => {
            return <VendorCard vendor={vendor} key={vendor.name} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/utils/data/vendors.json')
  const jsonData = await fsPromises.readFile(filePath)
  const vendors = JSON.parse(jsonData)

  return {
    props: {
      vendors,
    },
  }
}
