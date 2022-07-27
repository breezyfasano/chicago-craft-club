import React from 'react'

export default function AnnouncementBar() {
  return (
    <div className='bg-yellow text-center border-black border-solid border-t-4 border-b-4 px-0 py-2'>
      <p className='font-black text-md mb-0'>
        Announcing our new Geneva community! Find friends and more.{' '}
        <a
          href='https://links.geneva.com/invite/1c4aefe8-cc7a-4fc4-9a4c-44eefd4f57a0'
          target='_blank'
          rel='noreferrer'
        >
          Join here.
        </a>{' '}
        🌼
      </p>
    </div>
  )
}
