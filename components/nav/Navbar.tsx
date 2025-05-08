import Link from 'next/link'
import React, { useState } from 'react'
import Threads from '../svg/Threads'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {}

const navItems = [
  { href: '#Work', label: 'Work' },
  { href: '#About', label: 'About' },
  { href: '#Blog', label: 'Blog' },
  {
    href: 'mailto:ryan.houk@proton.me?subject=Hey, Ryan! I would like to chat about...',
    label: 'Contact',
  },
]

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed z-50 flex justify-between w-full px-6 bg-gradient-to-b from-black to-black/0">
        {/* AVATAR */}
        <div className="flex items-center justify-start flex-1 h-20">
          <div className={`lg:flex ${isOpen ? 'hidden' : 'flex items-center'}`}>
            <Image
              id="avatar"
              src={'/img/photos/avatar.png'}
              alt={'Photo of Ryan Houk smiling'}
              width={400}
              height={400}
              className="w-8 transition-all border-2 rounded-full border-white/30 hover:cursor-cell hover:border-white"
            />
            <p className="ml-3 font-mono text-white/70">ryanhouk</p>
          </div>
        </div>

        {/* NAV ITEMS */}
        <div className="items-center justify-center hidden h-20 gap-8 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="font-mono text-sm text-white transition-all duration-200 opacity-60 hover:opacity-100">
              {item.label}
            </Link>
          ))}
        </div>

        {/* SOCIAL */}
        <div className="items-center justify-end flex-1 hidden h-20 gap-4 lg:flex">
          <Link
            href="https://www.threads.net/@ryanhouk"
            target="_blank"
            className="relative transition-all group opacity-60 hover:opacity-100">
            <Threads className="w-4 text-white" />
            <div className="absolute px-2 py-1 text-xs text-white transition-all duration-300 transform scale-0 rotate-90 -translate-x-1/2 translate-y-2 bg-black rounded opacity-0 left-1/2 top-full group-hover:mt-6 group-hover:scale-100 group-hover:opacity-100">
              Threads
            </div>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 flex items-center justify-center border rounded-full bottom-6 right-6 lg:hidden w-14 h-14 bg-black/40 border-white/20 backdrop-blur-xl">
        <div className="relative flex items-center justify-center w-6 h-6">
          <motion.div
            className="absolute w-6 h-0.5 bg-white"
            animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="absolute w-6 h-0.5 bg-white"
            animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm lg:hidden">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center h-full gap-8">
              {/* Mobile Avatar */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 mb-8">
                <Image
                  src={'/img/photos/avatar.png'}
                  alt={'Photo of Ryan Houk smiling'}
                  width={400}
                  height={400}
                  className="w-10 border-2 rounded-full border-white/30"
                />
                <span className="font-mono text-white">ryanhouk</span>
              </motion.div>

              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: isOpen ? 0.1 + index * 0.1 : 0,
                    ease: 'easeOut',
                  }}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-mono text-2xl text-white transition-all duration-200 opacity-60 hover:opacity-100">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: isOpen ? 0.5 : 0,
                  ease: 'easeOut',
                }}
                className="mt-8">
                <Link
                  href="https://www.threads.net/@ryanhouk"
                  target="_blank"
                  className="relative transition-all group opacity-60 hover:opacity-100">
                  <Threads className="w-6 text-white" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
