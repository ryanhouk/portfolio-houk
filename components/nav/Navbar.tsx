import Link from 'next/link';
import React from 'react';
import Medium from '../svg/Medium';
import LinkedIn from '../svg/LinkedIn';
import Threads from '../svg/Threads';

type Props = {};

const navItems = [
  { href: '#', label: 'Work' },
  { href: '#', label: 'About' },
  { href: '#', label: 'Blog' },
];

const Navbar = (props: Props) => {
  return (
    <>
      <nav className='via-bg-black/50 fixed z-50 w-full bg-gradient-to-b from-black to-black/0 flex justify-between px-8'>
        <div className='text-white h-20 items-center justify-center lg:flex hidden'>LOGO</div>
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
          <Link href='#' className='flex flex-col group opacity-60 hover:opacity-100 transition-all'>
            <Threads className='text-white w-8' />
          </Link>
          <Link href='#' className='flex flex-col group opacity-60 hover:opacity-100 transition-all'>
            <LinkedIn className='text-white w-6' />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
