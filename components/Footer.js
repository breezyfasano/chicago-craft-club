import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-yellow border-black border-solid border-t-4 border-b-4 font-bold py-8 lg:py-8 px-5'>
      <div className='flex flex-wrap justify-between lg:w-3/4 2xl:w-2/5 mx-auto'>
        <div className='w-full lg:w-1/2'>
          Copyright Chicago Craft Club 2022. Website by Breezy Fasano.
        </div>
        <div className='w-full lg:w-1/2 '>
          <ul className='socialsList justify-center lg:justify-end'>
            <li>
              <a
                href='https://www.facebook.com/groups/1233181850502151'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/icons/black/facebook-black.svg'
                  width={30}
                  height={30}
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
                  src='/icons/black/instagram-black.svg'
                  width={30}
                  height={30}
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
                  src='/icons/black/discord-black.svg'
                  width={30}
                  height={30}
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
                  src='/icons/black/tiktok-black.svg'
                  width={30}
                  height={30}
                  alt='Tiktok'
                ></Image>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
