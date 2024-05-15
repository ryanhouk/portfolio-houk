import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type LinkItem = {
  url: string
  title: string
}

// Example data constant
const linkItems: LinkItem[] = [
  { url: '/mixtape/views/login/', title: 'Login' },
  { url: '/mixtape/views/home/empty/', title: 'Home Empty' },
  { url: '/mixtape/views/home/populated/', title: 'Home Populated' },
]

const MixNavbar = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <>
      <section className="fixed top-0 m-4 left-0 w-full z-[100] hidden lg:flex">
        <div className="relative">
          {/* Dropdown Button */}
          <button
            className="px-4 py-2 text-sm text-white transition-all border rounded-xl hover:bg-white/20 bg-white/10 border-white/5"
            onClick={toggleDropdown}>
            Select View
          </button>
          {/* Dropdown Menu Animation */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute z-10 w-56 mt-4 origin-top bg-white border shadow-md overflow-clip rounded-xl bg-white/5 border-white/5">
                {linkItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="block px-4 py-2 text-sm transition-all text-white/60 hover:text-white hover:bg-white/10">
                    {item.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}

export default MixNavbar
