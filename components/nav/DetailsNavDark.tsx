import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Threads from '../svg/Threads'
import Image from 'next/image'

const navItems = [
  { href: '/#Work', label: 'Case Studies' },
  // { href: '#About', label: 'About' },
  // { href: '#Blog', label: 'Blog' },
]

const DetailsNav = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollThreshold = 900 // Adjust this value to control the scroll depth

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollThreshold])

  return (
    <>
      <motion.nav
        className={`fixed z-50 flex justify-between w-full px-6 transition-colors duration-300 ${isScrolled ? 'add-scrolled-state-here' : 'add-initial-state-here'}`}>
        {/* AVATAR */}
        <div className="items-center justify-start flex-1 hidden h-20 lg:flex">
          <Link href={'/'}>
            <Image
              src={'/img/photos/avatar.png'}
              alt={'Photo of Ryan Houk smiling'}
              width={400}
              height={400}
              unoptimized={true}
              className="w-8 transition-all border-2 rounded-full border-black/30 hover:border-black"
            />
          </Link>
        </div>

        {/* NAV ITEMS */}
        <div className="flex items-center justify-center h-12 gap-4 lg:h-16">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`px-4 py-2 font-mono text-xs bg-white/5 backdrop-blur-2xl lg:text-sm transition-all duration-200 border rounded-full ${isScrolled ? 'hover:bg-white/20 text-white border-white/10' : 'hover:bg-white/20 text-white border-white/10'}`}>
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
            <Threads
              className={`w-4 ${isScrolled ? 'text-white' : 'text-white'}`}
            />
          </Link>
        </div>
      </motion.nav>
    </>
  )
}

export default DetailsNav