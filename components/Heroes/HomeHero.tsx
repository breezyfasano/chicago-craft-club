import { MeetFriendsDoCrafts } from '../svg/MeetFriendsDoCrafts'
import { Scissors } from '../svg/Scissors'

export const HomeHero = () => {
  return (
    <header className='bg-blue overflow-hidden lg:py-12'>
      <div className='container relative'>
        <Scissors className='absolute -top-10 -translate-x-14 lg:translate-x-0' />
        <MeetFriendsDoCrafts className='mx-auto max-w-full relative' />
        <h1 className='sr-only'>
          Meet friends, do crafts, and leave your house!
        </h1>
      </div>
    </header>
  )
}
