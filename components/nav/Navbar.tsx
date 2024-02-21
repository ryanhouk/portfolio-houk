import Link from 'next/link';
import React from 'react';

type Props = {};

const navItems = [
  { href: '#', label: 'Work' },
  { href: '#', label: 'About' },
  { href: '#', label: 'Blog' },
];

const Navbar = (props: Props) => {
  return (
    <>
      <nav className='via-bg-black/50 fixed z-50 w-full bg-gradient-to-b from-black to-black/0'>
        <div className='flex h-20 items-center justify-center gap-8 text-white'>
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
      </nav>
    </>
  );
};

export default Navbar;
