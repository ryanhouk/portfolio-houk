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
      <nav className='via-bg-black/50 fixed z-50 w-full bg-gradient-to-b from-black to-black/0 flex justify-between px-6'>
        {/* AVATAR */}
        <div className='h-20 items-center justify-start lg:flex hidden flex-1'>
          <Image
            src={'/img/photos/avatar.png'}
            alt={'Photo of Ryan Houk smiling'}
            width={400}
            height={400}
            className='rounded-full border-2 border-white/30 w-8 hover:border-white transition-all hover:cursor-cell'
          />
        </div>

        {/* NAV ITEMS */}
        <div className='flex h-20 items-center justify-center gap-4 lg:gap-8 text-white'>
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
        <div className='flex h-20 items-center justify-end gap-4 flex-1'>
          <Link href='https://www.threads.net/@ryanhouk' target='_blank' className='group opacity-60 hover:opacity-100 transition-all relative'>
            <Threads className='text-white w-4' />
            <div className="absolute group-hover:mt-6 top-full left-1/2 transform -translate-x-1/2 translate-y-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-0 rotate-90 transition-all duration-300">Threads</div>
          </Link>
          <Link href='https://www.linkedin.com/in/ryanhouk/' target='_blank' className='group opacity-60 hover:opacity-100 transition-all relative'>
            <LinkedIn className='text-white w-4' />
            <div className="absolute group-hover:mt-6 top-full left-1/2 transform -translate-x-1/2 translate-y-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-0 rotate-90 transition-all duration-300">LinkedIn</div>
          </Link>
          <Link href='https://dribbble.com/ryanhouk' target='_blank' className='group opacity-60 hover:opacity-100 transition-all relative'>
            <Dribbble className='text-white w-4' />
            <div className="absolute group-hover:mt-6 top-full left-1/2 transform -translate-x-1/2 translate-y-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-0 rotate-90 transition-all duration-300">Dribbble</div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
