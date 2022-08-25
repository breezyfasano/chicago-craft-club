import Link from 'next/link'
export default function AnnouncementBar() {
  const content = ''
  return content ? (
    <div className='bg-yellow text-center border-black border-solid border-t-4 border-b-4 px-0 py-2'>
      <span className='font-black text-md mb-0'>{content}</span>
    </div>
  ) : null
}
