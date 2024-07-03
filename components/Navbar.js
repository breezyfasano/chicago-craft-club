import Link from 'next/link'
import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Logotype } from '../components/svg/Logotype'
import { Button } from './Elements/Button'

const navigation = [
  { name: 'Events', href: '/events' },
  { name: 'Craft Cubby', href: '/craft-cubby' },
  { name: 'Crochet 101 Zine', href: '/docs/crochet-zine.pdf' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as='nav' className='bg-pink py-4 lg:py-8'>
      {({ open }) => (
        <>
          <div className='container mx-auto'>
            <div className='relative flex items-center justify-center h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center lg:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray hover:text-gray hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <Link href='/' className='lg:hidden' passHref>
                <Logotype className='max-w-[128px]' />
              </Link>
              <div className='flex items-center justify-start lg:items-stretch lg:justify-start'>
                <div className='hidden lg:flex items-center gap-x-14'>
                  <Link href='/' passHref>
                    <Logotype />
                  </Link>
                  <ul className='flex gap-x-10'>
                    {navigation.map((item) => (
                      <li
                        key={item.name}
                        className='text-lg text-gray font-bold hover:text-blue no-underline lowercase nav-link'
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                  <Button link='https://app.geneva.com/invite/3a4ab924-4f52-4b7a-b0d5-c234ba74ea39'>
                    join online community
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Transition
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Disclosure.Panel className='lg:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      'block text-black px-3 py-2 rounded-md text-sm font-bold'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <Button link='https://app.geneva.com/invite/3a4ab924-4f52-4b7a-b0d5-c234ba74ea39'>
                  join online community
                </Button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
