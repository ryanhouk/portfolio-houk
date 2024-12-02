import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -20 },
  }

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.2, ease: 'easeInOut' }}>
            <ul className="flex flex-col font-mono text-sm text-white transition-all duration-200 opacity-60 hover:opacity-100">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#Work">Work</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#About">About</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="#Blog">Blog</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MenuButton
