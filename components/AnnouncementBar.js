import Link from 'next/link'
export default function AnnouncementBar() {
  return (
    <div className='bg-yellow text-center border-black border-solid border-t-4 border-b-4 px-0 py-2'>
      <span className='font-black text-md mb-0'>
        The Bans Off Our Bodies craft fair for reproductive rights is on August
        12!{' '}
        <Link href='/bans-off-our-bodies'>
          <a target='_blank' rel='noreferrer'>
            {' '}
            More info.
          </a>
        </Link>
      </span>
    </div>
  )
}
