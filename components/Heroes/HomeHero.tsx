import { MeetFriendsDoCrafts } from '../svg/MeetFriendsDoCrafts'

export const HomeHero = () => {
  return (
    <header className=' lg:py-12 bg-blue text-yellow'>
      <div className='container'>
        <MeetFriendsDoCrafts className='mx-auto max-w-full' />
        <h1 className='sr-only'>
          Meet friends, do crafts, and leave your house!
        </h1>
      </div>
    </header>
  )
}
