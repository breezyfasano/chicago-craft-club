import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

export default function CraftCubby() {
  return (
    <Layout pageClass={'textPage'}>
      <PageHeader text='the Craft Cubby' />
      <section className='container flex justify-center pb-0'>
        <p>
          The Craft Cubby is our own take on the Little Free Library! Located at
          Second Shift in Logan Square, we have a craft supply stash that is
          “take what you need, and leave what you don’t”. If you’re like us and
          hoard so many hobby supplies that you don’t plan on using, donate it
          to another crafter in need. Want to try a new hobby but can’t afford
          all of the new supplies? Come browse the free supply stash!
        </p>
      </section>
      <section className='container pb-0'>
        <h2>Rules and Terms</h2>
        <ul>
          <ul>
            <li>
              <strong>All sharp object donations</strong> (sewing needles,
              darning needles, scissors, x-acto knives, etc){' '}
              <strong>must be brand new in the package</strong> - no exceptions.
              This is a safety thing.
            </li>
            <li>
              <strong>
                Donations must be gently used or new; no broken items
              </strong>
              . See “Making a Donation” for more information.
            </li>
            <li>
              <strong>Take only the supplies you need & be cool.</strong> We
              want this to be accessible for everyone in our community. This is
              based on the honor system here - if you don’t need it, please
              leave it for someone else that does. 🙂
            </li>
            <li>
              <strong>Access is limited to specific days and hours</strong>{' '}
              (unless you’re a Second Shift member!) For more info, see “Browse
              the Craft Cubby”
            </li>
            <li>We have the right to add or edit these terms any time.</li>
          </ul>
        </ul>
      </section>
      <section className='container flex w-full pb-0'>
        <div className='w-full lg:w-1/3'>
          <address className='not-italic'>
            <span className='block'>
              <strong>Second Shift Chicago</strong>
            </span>
            <span className='block'>
              <a href='tel:7736986142'>(773)-698-6142</a>
            </span>
            <span className='block'>3432 W Diversey Ave, floor 2</span>
            <span className='block'>Chicago, IL 60647</span>
          </address>
        </div>
        <div className='w-full lg:w-2/3'>
          <p>
            When you walk in to the Second Shift building, go down the hall, up
            the stairs, into the door on the right. The Craft Cubby will be
            immediately to your left.
          </p>
          <p>If you need help, talk to Mary or Laura!</p>
        </div>
      </section>
      <section className='container'>
        <h2>Making a Donation</h2>
        <p>
          You can drop off any donations on site at Second Shift! See our drop
          off hours below.
        </p>
        <p>
          We accept walk-in donations, but if you require some help carrying
          things or any other assistance, please call Second Shift at{' '}
          <a href='tel:7736986142'>(773)-698-6142</a> or email us beforehand.
        </p>
        <p>
          If you prefer to make a direct donation of new supplies, please check
          out our Amazon wishlist or consider donating to our Ko-fi. We really,
          really appreciate your support!!
        </p>

        <h3>Drop Off Hours</h3>
        <p>Second Shift Business Hours; Monday through Friday, 9am to 4pm.</p>
        <p>
          If for any reason the door is locked, ring the doorbell and we will
          let you in.
        </p>
        <p>
          Need to come in during extended hours? We’ll work with you! Email us{' '}
          <a href='mailto:craftcubby@chicagocraft.club'>
            craftcubby@chicagocraft.club
          </a>
          .
        </p>

        <div className='my-4'>
          <h3>Examples of items to donate</h3>
          <p>
            Do you have anything else you’d like to donate that doesn’t fit in
            the scope of this list? Contact us.
          </p>
          <ul className='pt-4'>
            <li>Scrap yarn or full skeins</li>
            <li>fabric, felt or textile scraps</li>
            <li>Sheets of crafting paper</li>
            <li>sticker sheets, even if they are half used</li>
            <li>Stamps, buttons, beads</li>
            <li>
              Working markers, colored pencils, or other drawing materials
            </li>
            <li>Acrylic/fabric paint, paint brushes, and canvases</li>
            <li>Embroidery thread, hoops, aida fabric</li>
            <li>Art kits</li>
            <li>Anything else crafty and fun!</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
