import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import LinkedIn from '../svg/LinkedIn'
import Threads from '../svg/Threads'
import Image from 'next/image'

const navItems = [
  { href: '/#Work', label: 'Case Studies' },
  // { href: '#About', label: 'About' },
  // { href: '#Blog', label: 'Blog' },
]

const DetailsNavLight = () => {
  return (
    <>
      <motion.nav className="fixed z-50 flex justify-between w-full px-6 transition-colors duration-300 bg-white shadow-sm">
        {/* AVATAR */}
        <div className="items-center justify-start flex-1 hidden h-16 lg:flex">
          <Image
            src={'/img/photos/avatar.png'}
            alt={'Photo of Ryan Houk smiling'}
            width={400}
            height={400}
            unoptimized={true}
            className="w-8 transition-all border-2 rounded-full border-black/30 hover:cursor-cell hover:border-black"
          />
        </div>

        {/* NAV ITEMS */}
        <div className="flex items-center justify-center h-12 gap-4 lg:h-16 lg:gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="px-4 py-2 font-mono text-xs transition-all duration-200 border rounded-full lg:text-sm hover:bg-black hover:text-white border-black/10">
              {item.label}
            </Link>
          ))}
        </div>

        {/* SOCIAL */}
        <div className="flex items-center justify-end flex-1 h-12 gap-4 lg:h-16">
          <Link
            href="https://www.threads.net/@ryanhouk"
            target="_blank"
            title="Visit Ryan Houk Threads"
            className="relative transition-all hover:opacity-60">
            <Threads className="w-4 text-black" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ryanhouk/"
            target="_blank"
            title="Visit Ryan Houk LinkedIn"
            className="transition-all hover:opacity-60">
            <LinkedIn className="w-4 text-black" />
          </Link>
        </div>
      </motion.nav>
    </>
  )
}

export default DetailsNavLight