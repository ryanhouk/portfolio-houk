import React from 'react'

type Props = {
  className?: string
}

const IconPaste = ({ className }: Props) => {
  return (
    <>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="46"
        fill="currentColor"
        viewBox="0 0 24 24">
        <path d="M10.8 2.4a1.2 1.2 0 100 2.4h2.4a1.2 1.2 0 100-2.4h-2.4z"></path>
        <path
          fillRule="evenodd"
          d="M4.8 6a2.4 2.4 0 012.4-2.4 3.6 3.6 0 003.6 3.6h2.4a3.6 3.6 0 003.6-3.6A2.4 2.4 0 0119.2 6v13.2a2.4 2.4 0 01-2.4 2.4H7.2a2.4 2.4 0 01-2.4-2.4V6zm11.648 6.848a1.2 1.2 0 00-1.696-1.696L10.8 15.103l-1.552-1.551a1.2 1.2 0 00-1.696 1.696l2.4 2.4a1.2 1.2 0 001.696 0l4.8-4.8z"
          clipRule="evenodd"></path>
      </svg>
    </>
  )
}

export default IconPaste
