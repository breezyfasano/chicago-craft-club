export default function VendorCard({ vendor }) {
  const cleanHandle = () => {
    let newHandle = vendor.instagram.replace('@', '')
    return 'https://www.instagram.com/' + newHandle
  }

  return (
    <article className='bg-white rounded-md shadow-md p-6'>
      <h2 className='text-boobs-purple font-bold'>{vendor.name}</h2>
      {vendor.pronouns && (
        <p className='text-sm text-zinc-600'>{vendor.pronouns}</p>
      )}
      <p>{vendor.description}</p>
      <p>
        <a href={cleanHandle()} target='_blank' rel="noreferrer">
          {vendor.instagram}
        </a>
      </p>
      {vendor.website && (
        <p>
          <a href={vendor.website} target='_blank' rel="noreferrer">
            Website
          </a>
        </p>
      )}
    </article>
  )
}
