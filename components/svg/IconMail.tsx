import React from 'react'

type Props = {
  className?: string
}

const IconMail = ({ className }: Props) => {
  return (
    <>
      <svg
        className={className}
        width="32"
        height="32"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="18" height="14" x="3" y="5" rx="1"></rect>
        <path d="M20 5.5 12 13 4 5.5"></path>
      </svg>
      {/* <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 24 24">
        <path d="M2.404 7.06L12 11.859l9.596-4.797A2.4 2.4 0 0019.2 4.8H4.8a2.4 2.4 0 00-2.396 2.26z"></path>
        <path d="M21.6 9.742l-9.6 4.8-9.6-4.8V16.8a2.4 2.4 0 002.4 2.4h14.4a2.4 2.4 0 002.4-2.4V9.742z"></path>
      </svg> */}
    </>
  )
}

export default IconMail
