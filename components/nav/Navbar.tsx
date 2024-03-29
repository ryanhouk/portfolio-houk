import Link from 'next/link';
import React from 'react';
import LinkedIn from '../svg/LinkedIn';
import Threads from '../svg/Threads';
import Image from 'next/image';
import Dribbble from '../svg/Dribbble';

type Props = {};

const navItems = [
  { href: '#Work', label: 'Work' },
  { href: '#About', label: 'About' },
  { href: '#Blog', label: 'Blog' },
  // { href: 'mailto:ryan.houk@proton.me?subject=Hey, Ryan! I like your portfolio.', label: 'Contact' },
];

const Navbar = (props: Props) => {
  return (
    <>
      <nav className='via-bg-black/50 fixed z-50 flex w-full justify-between bg-gradient-to-b from-black to-black/0 px-6'>
        {/* AVATAR */}
        <div className='hidden h-20 flex-1 items-center justify-start lg:flex'>
          <Image
            src={'/img/photos/avatar.png'}
            alt={'Photo of Ryan Houk smiling'}
            width={400}
            height={400}
            className='w-8 rounded-full border-2 border-white/30 transition-all hover:cursor-cell hover:border-white'
          />
        </div>

        {/* NAV ITEMS */}
        <div className='flex h-20 items-center justify-center gap-4 text-white lg:gap-8'>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className='font-mono text-sm opacity-60 transition-all duration-200 hover:opacity-100'
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* SOCIAL */}
        <div className='flex h-20 flex-1 items-center justify-end gap-4'>
          <Link
            href='https://www.threads.net/@ryanhouk'
            target='_blank'
            className='group relative opacity-60 transition-all hover:opacity-100'
          >
            <Threads className='w-4 text-white' />
            <div className='absolute left-1/2 top-full -translate-x-1/2 translate-y-2 rotate-90 scale-0 transform rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:mt-6 group-hover:scale-100 group-hover:opacity-100'>
              Threads
            </div>
          </Link>
          <Link
            href='https://www.linkedin.com/in/ryanhouk/'
            target='_blank'
            className='group relative opacity-60 transition-all hover:opacity-100'
          >
            <LinkedIn className='w-4 text-white' />
            <div className='absolute left-1/2 top-full -translate-x-1/2 translate-y-2 rotate-90 scale-0 transform rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:mt-6 group-hover:scale-100 group-hover:opacity-100'>
              LinkedIn
            </div>
          </Link>
          <Link
            href='https://dribbble.com/ryanhouk'
            target='_blank'
            className='group relative opacity-60 transition-all hover:opacity-100'
          >
            <Dribbble className='w-4 text-white' />
            <div className='absolute left-1/2 top-full -translate-x-1/2 translate-y-2 rotate-90 scale-0 transform rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:mt-6 group-hover:scale-100 group-hover:opacity-100'>
              Dribbble
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
