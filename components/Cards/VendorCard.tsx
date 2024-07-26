type VendorCardProps = {
  vendor: {
    pronouns?: string
    name?: string
    description?: string
    website?: string
    instagram?: string
  }
}

export default function VendorCard({ vendor }: VendorCardProps) {
  const cleanHandle = () => {
    let newHandle = vendor?.instagram?.replace('@', '')
    return 'https://www.instagram.com/' + newHandle
  }

  return (
    <article className='bg-white rounded-md shadow-md p-6 flex flex-col'>
      <h2 className='text-boobs-purple font-bold'>{vendor.name}</h2>
      {vendor.pronouns && (
        <p className='text-sm text-zinc-600'>{vendor.pronouns}</p>
      )}
      <p>{vendor.description}</p>
      <div className='mt-auto flex py-4'>
        <div>
          <p className='text-boobs-purple'>
            <i className='fa-brands fa-instagram fa-lg mr-1'></i>{' '}
            <a href={cleanHandle()} target='_blank' rel='noreferrer'>
              {' '}
              {vendor.instagram}
            </a>
          </p>
          {vendor.website && (
            <p className='text-boobs-purple'>
              <i className='fa-solid fa-link fa-lg mr-1'></i>
              <a href={vendor.website} target='_blank' rel='noreferrer'>
                Website
              </a>
            </p>
          )}
        </div>
      </div>
    </article>
  )
}
