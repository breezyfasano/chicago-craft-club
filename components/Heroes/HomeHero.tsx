import { MeetFriendsDoCrafts } from '../svg/MeetFriendsDoCrafts'
import Image from 'next/image'
import gemsLeftImage from '../../public/img/gems-left.png'
import gemsRightImage from '../../public/img/gems-right.png'

export const HomeHero = () => {
  return (
    <header className='bg-blue py-10 text-yellow lg:py-12'>
      <div className='relative flex flex-col gap-10 px-14 lg:flex-row 2xl:max-w-[1440px]'>
        <Image
          src={gemsLeftImage}
          alt=''
          width={278}
          height={270}
          className='absolute -z-0 max-w-[30%] lg:static lg:max-w-full'
        />
        <MeetFriendsDoCrafts className='z-10 mx-auto md:w-1/2' />
        <h1 className='sr-only'>
          Meet friends, do crafts, and leave your house!
        </h1>
        <Image
          src={gemsRightImage}
          alt=''
          width={293}
          height={286}
          className='absolute -z-0 max-w-[30%] lg:static'
        />
      </div>
    </header>
  )
}
