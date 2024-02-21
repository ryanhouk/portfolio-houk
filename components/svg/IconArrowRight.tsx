import React from 'react'


type Props = {
    className?: string
}

const IconArrowRight = ({ className }: Props) => {
  return (
    <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21.75 12c0-5.385-4.366-9.75-9.75-9.75A9.75 9.75 0 002.25 12c0 5.384 4.365 9.75 9.75 9.75 5.384 0 9.75-4.366 9.75-9.75zm-10.5 3.754l2.98-3.004H7.22v-1.5h7.011l-2.98-3.004 1.065-1.057L17.087 12l-4.774 4.81-1.064-1.056z"></path>
        </svg>
    </>
  )
}

export default IconArrowRight