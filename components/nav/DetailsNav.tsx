import Link from 'next/link';
import React from 'react';
import LinkedIn from '../svg/LinkedIn';
import Threads from '../svg/Threads';
import Image from 'next/image';
import Dribbble from '../svg/Dribbble';

type Props = {};

const navItems = [
  { href: '/#Work', label: 'Work' },
  { href: '#About', label: 'About' },
  { href: '#Blog', label: 'Blog' },
];

const DetailsNav = (props: Props) => {
  return (
    <>
      <nav className='fixed z-50 flex w-full justify-between bg-white/70 px-6 backdrop-blur-3xl'>
        {/* AVATAR */}
        <div className='hidden h-16 flex-1 items-center justify-start lg:flex'>
          <Image
            src={'/img/photos/avatar.png'}
            alt={'Photo of Ryan Houk smiling'}
            width={400}
            height={400}
            className='w-8 rounded-full border-2 border-black/30 transition-all hover:cursor-cell hover:border-black'
          />
        </div>

        {/* NAV ITEMS */}
        <div className='flex h-12 items-center justify-center gap-4 text-black lg:h-16 lg:gap-8'>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className='font-mono text-sm transition-all duration-200 hover:opacity-60'
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* SOCIAL */}
        <div className='flex h-12 flex-1 items-center justify-end gap-4 lg:h-16'>
          <Link
            href='https://www.threads.net/@ryanhouk'
            target='_blank'
            title='Visit Ryan Houk Threads'
            className='relative transition-all hover:opacity-60'
          >
            <Threads className='w-4 text-black' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/ryanhouk/'
            target='_blank'
            title='Visit Ryan Houk LinkedIn'
            className='transition-all hover:opacity-60'
          >
            <LinkedIn className='w-4 text-black' />
          </Link>
          <Link
            href='https://dribbble.com/ryanhouk'
            target='_blank'
            title='Visit Ryan Houk Dribbble'
            className='transition-all hover:opacity-60'
          >
            <Dribbble className='w-4 text-black' />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default DetailsNav;
