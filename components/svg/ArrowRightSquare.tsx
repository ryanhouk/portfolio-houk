import React from 'react'

type Props = {
  className?: string
}

function ArrowRightSquare({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  )
}

export default ArrowRightSquare
