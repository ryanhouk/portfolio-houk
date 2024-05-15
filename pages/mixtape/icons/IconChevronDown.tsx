import React from 'react'

type Props = {
  className?: string
  stroke?: string
}

const IconChevronDown: React.FC<Props> = ({ stroke, className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 21 8"
      className={className} // Apply provided Tailwind classes for size and stroke color
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M2 2l8.5 4L19 2"></path>
    </svg>
  )
}

export default IconChevronDown
