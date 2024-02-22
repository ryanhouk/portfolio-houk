import React from 'react'

type Props = {
    className?: string;
}

const IconWeb = ({className}: Props) => {
  return (
    <>
        <svg
      xmlns="http://www.w3.org/2000/svg"

      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
        className={className}
    >
      <path d="M3 13h18M9.75 17L9 20l-1 1h8l-1-1-.75-3h-4.5zM5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
    </>
  )
}

export default IconWeb