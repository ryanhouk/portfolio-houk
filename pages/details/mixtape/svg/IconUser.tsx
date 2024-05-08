import React from 'react'

interface IconUserProps {
  className?: string
}

function IconUser({ className }: IconUserProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Apply className prop to the SVG
      viewBox="0 0 22 25" // Maintain the original viewBox
      fill="none">
      <path
        fill="currentColor" // Use `currentColor` to allow the `fill` to be controlled via CSS `color`
        fillRule="evenodd"
        d="M11 10.4a4.8 4.8 0 100-9.6 4.8 4.8 0 000 9.6zM2.8 24.8c-1.657 0-3.04-1.367-2.6-2.964a11.2 11.2 0 0121.6 0c.44 1.597-.943 2.964-2.6 2.964H2.8z"
        clipRule="evenodd"></path>
    </svg>
  )
}

export default IconUser
