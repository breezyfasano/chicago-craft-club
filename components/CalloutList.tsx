type CalloutListProps = {
  items: { text: string; hoverText?: string }[]
}

export const CalloutList = ({ items }: CalloutListProps) => {
  return (
    <section className='w-full'>
      <div className='container'>
        <span className='block text-center text-xl font-sans font-black'>
          some of the things we like to do are...
        </span>
        <ul className='list-none flex lg:flex-row items-center justify-center flex-col w-full gap-6 lg:gap-12 py-8 lg:py-12'>
          {items.map((item) => (
            <li
              key={item.text}
              className='flex items-center justify-center text-base lg:text-xl text-center leading-8 font-display w-[140px] h-[140px] lg:w-[175px] lg:h-[175px] bg-pink text-gray rounded-full p-4'
            >
              {item.text}
            </li>
          ))}
        </ul>
        <p className='text-center font-bold text-gray'>*bring your own craft</p>
      </div>
    </section>
  )
}
