import Link from 'next/link';
import React from 'react';
import LinkedIn from '../svg/LinkedIn';
import Threads from '../svg/Threads';
import Image from 'next/image'
import Dribbble from '../svg/Dribbble';


type Props = {};

const navItems = [
  { href: '#Work', label: 'Work' },
  { href: '#About', label: 'About' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Contact' },
];

const Navbar = (props: Props) => {
  return (
    <>
      <nav className='via-bg-black/50 fixed z-50 w-full bg-gradient-to-b from-black to-black/0 flex justify-between px-8'>
        <div className='h-20 items-center justify-center lg:flex hidden'><Image src={'/img/photo/avatar.jpeg'} alt={'photo of ryan houk smiling'} width={400} height={400} className='rounded-full border-2 border-white w-8' /></div>
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
        <div className='flex h-20 items-center justify-center gap-4'>
          <Link href='https://www.threads.net/@ryanhouk' target='_blank' className='flex flex-col group opacity-60 hover:opacity-100 transition-all'>
            <Threads className='text-white w-4' />
          </Link>
          <Link href='https://www.ryanhouk.com/index-orig' target='_blank' className='flex flex-col group opacity-60 hover:opacity-100 transition-all'>
            <LinkedIn className='text-white w-4' />
          </Link>
          <Link href='https://dribbble.com/ryanhouk' target='_blank' className='flex flex-col group opacity-60 hover:opacity-100 transition-all'>
            <Dribbble className='text-white w-4' />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
