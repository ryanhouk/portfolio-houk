import Link from 'next/link'
import React from 'react'
import LinkedIn from '../svg/LinkedIn'
import Threads from '../svg/Threads'
import Image from 'next/image'
import IconMail from '../svg/IconMail'

type Props = {}

const navItems = [
  { href: '#Work', label: 'Work' },
  { href: '#About', label: 'About' },
  { href: '#Blog', label: 'Blog' },
  // { href: '#Contact', label: 'Contact' },
  // { href: 'mailto:ryan.houk@proton.me?subject=Hey, Ryan! I like your portfolio.', label: 'Contact' },
]

const Navbar = (props: Props) => {
  return (
    <>
      <nav className="fixed z-50 flex justify-between w-full px-6 via-bg-black/50 bg-gradient-to-b from-black to-black/0">
        {/* AVATAR */}
        <div className="items-center justify-start flex-1 hidden h-20 lg:flex">
          <Image
            src={'/img/photos/avatar.png'}
            alt={'Photo of Ryan Houk smiling'}
            width={400}
            height={400}
            className="w-8 transition-all border-2 rounded-full border-white/30 hover:cursor-cell hover:border-white"
          />
        </div>

        {/* NAV ITEMS */}
        <div className="flex items-center justify-center h-20 gap-4 text-white lg:gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="font-mono text-sm transition-all duration-200 opacity-60 hover:opacity-100">
              {item.label}
            </Link>
          ))}
        </div>

        {/* SOCIAL */}
        <div className="flex items-center justify-end flex-1 h-20 gap-4">
          <Link
            href="https://www.threads.net/@ryanhouk"
            target="_blank"
            className="relative transition-all group opacity-60 hover:opacity-100">
            <Threads className="w-4 text-white" />
            <div className="absolute px-2 py-1 text-xs text-white transition-all duration-300 transform scale-0 rotate-90 -translate-x-1/2 translate-y-2 bg-black rounded opacity-0 left-1/2 top-full group-hover:mt-6 group-hover:scale-100 group-hover:opacity-100">
              Threads
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ryanhouk/"
            target="_blank"
            className="relative transition-all group opacity-60 hover:opacity-100">
            <LinkedIn className="w-4 text-white" />
            <div className="absolute px-2 py-1 text-xs text-white transition-all duration-300 transform scale-0 rotate-90 -translate-x-1/2 translate-y-2 bg-black rounded opacity-0 left-1/2 top-full group-hover:mt-6 group-hover:scale-100 group-hover:opacity-100">
              LinkedIn
            </div>
          </Link>
          <Link
            href="mailto:ryan.houk@proton.me?subject=Hey, Ryan! I would like to chat about..."
            target="_blank"
            className="relative transition-all group opacity-60 hover:opacity-100">
            <IconMail className="w-6 text-white" />
            <div className="absolute px-2 py-1 text-xs text-white transition-all duration-300 transform scale-0 rotate-90 -translate-x-1/2 translate-y-2 bg-black rounded opacity-0 left-1/2 top-full group-hover:mt-6 group-hover:scale-100 group-hover:opacity-100">
              Contact
            </div>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
