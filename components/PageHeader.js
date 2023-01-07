import React from 'react'

export default function PageHeader({ text }) {
  return (
    <header className='w-full flex justify-center bg-blue py-8'>
      <h1 className='text-pink'>{text}</h1>
    </header>
  )
}
