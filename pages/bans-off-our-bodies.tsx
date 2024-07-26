import Image from 'next/image'
import Link from 'next/link'
import fsPromises from 'fs/promises'
import path from 'path'
import Layout from '../components/Layout'
import VendorCard from '../components/Cards/VendorCard'

type vendorProps = {
  vendors: vendor[]
}

type vendor = {
  name: string
  instagram: string
  etsy: string
  website: string
  image: string
}

export default function BansOffOurBodies({ vendors }: vendorProps) {
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
        <p>Thank you SO much for checking out Bans Off Our Bodies!</p>
        <p>
          We raised a total of $4,468 for the Chicago Abortion Fund and Midwest
          Access Coalition.{' '}
          <a href='https://www.instagram.com/p/Chcq5ikszFa/'>
            Read more here!!
          </a>
        </p>
        <p>
          Below are the awesome vendors that participated - be sure to follow
          their socials and support them.
        </p>
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
  const vendors = JSON.parse(jsonData.toString())

  return {
    props: {
      vendors,
    },
  }
}
