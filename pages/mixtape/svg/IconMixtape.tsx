import React from 'react'

interface IconMixtapeProps {
  className?: string
}

function IconMixtape({ className }: IconMixtapeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 26 24" // Maintain the original viewBox
      fill="none">
      <path
        fill="currentColor" // Use `currentColor` to allow text color utilities to set the fill color
        d="M8.2.8a1.6 1.6 0 100 3.2h9.6a1.6 1.6 0 000-3.2H8.2zM3.4 7.2A1.6 1.6 0 015 5.6h16a1.6 1.6 0 010 3.2H5a1.6 1.6 0 01-1.6-1.6zM.2 13.6a3.2 3.2 0 013.2-3.2h19.2a3.2 3.2 0 013.2 3.2V20a3.2 3.2 0 01-3.2 3.2H3.4A3.2 3.2 0 01.2 20v-6.4z"></path>
    </svg>
  )
}

export default IconMixtape
