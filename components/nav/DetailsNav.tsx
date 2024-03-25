import Link from 'next/link';
import React from 'react';
import LinkedIn from '../svg/LinkedIn';
import Threads from '../svg/Threads';
import Image from 'next/image'
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
      <nav className='fixed z-50 w-full flex justify-between px-6 bg-white/70 backdrop-blur-3xl'>
        
        {/* AVATAR */}
        <div className='h-20 items-center justify-start lg:flex hidden flex-1'>
          <Image src={'/img/photos/avatar.png'} alt={'Photo of Ryan Houk smiling'} width={400} height={400} className='rounded-full border-2 border-black/30 w-8 hover:border-black transition-all hover:cursor-cell' />
        </div>
        
        {/* NAV ITEMS */}
        <div className='flex lg:h-20 h-12 items-center justify-center gap-4 lg:gap-8 text-black'>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className='font-mono text-sm hover:opacity-60 transition-all duration-200'
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* SOCIAL */}
        <div className='flex lg:h-20 h-12 items-center justify-end gap-4 flex-1'>
          <Link href='https://www.threads.net/@ryanhouk' target='_blank' title="Visit Ryan Houk Threads" className='hover:opacity-60 transition-all relative'>
            <Threads className='text-black w-4' />
          </Link>
          <Link href='https://www.linkedin.com/in/ryanhouk/' target='_blank' title="Visit Ryan Houk LinkedIn" className='hover:opacity-60 transition-all'>
            <LinkedIn className='text-black w-4' />
          </Link>
          <Link href='https://dribbble.com/ryanhouk' target='_blank' title="Visit Ryan Houk Dribbble" className='hover:opacity-60 transition-all'>
            <Dribbble className='text-black w-4' />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default DetailsNav;
