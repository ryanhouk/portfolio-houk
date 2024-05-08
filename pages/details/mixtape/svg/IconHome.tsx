import React from 'react'

interface IconHomeProps {
  className?: string
}

function IconHome({ className }: IconHomeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 22 23"
      fill="none">
      <path
        fill="currentColor" // Using `currentColor` allows the `fill` color to be controlled via `text-color` utility classes in Tailwind
        d="M0 8.647a3 3 0 011.39-2.531l8-5.091a3 3 0 013.22 0l8 5.09A3 3 0 0122 8.648V20a3 3 0 01-3 3H3a3 3 0 01-3-3V8.647z"></path>
    </svg>
  )
}

export default IconHome
