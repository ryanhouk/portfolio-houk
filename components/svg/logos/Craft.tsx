import React from 'react'

type Props = {
  className?: string
}

const Craft = ({ className }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 2"
      viewBox="0 0 110.89 110.89">
      <g>
        <g>
          <path
            d="M59.05 107.6c0 1.82 1.47 3.29 3.29 3.29h45.36c1.82 0 3.3-1.48 3.18-3.29-1.63-26.06-22.48-46.92-48.54-48.54-1.81-.11-3.29 1.37-3.29 3.18v45.36zM51.84 62.34c0-1.82-1.47-3.29-3.29-3.29H3.19c-1.82 0-3.3 1.48-3.18 3.29 1.63 26.06 22.48 46.92 48.54 48.54 1.81.11 3.29-1.37 3.29-3.18V62.34z"
            fill={`#253F78`}></path>
          <path
            d="M51.84 48.55c0 1.82-1.47 3.29-3.29 3.29H3.19c-1.82 0-3.3-1.48-3.18-3.29C1.63 22.49 22.49 1.63 48.55 0c1.81-.11 3.29 1.37 3.29 3.18v45.36z"
            fill={`#FF61FD`}></path>
          <path
            d="M59.05 3.29c0-1.82 1.47-3.29 3.29-3.29h45.36c1.82 0 3.3 1.48 3.18 3.29-1.63 26.06-22.48 46.92-48.54 48.54-1.81.11-3.29-1.37-3.29-3.18V3.29z"
            fill={`#2e6de9`}></path>
        </g>
      </g>
    </svg>
  )
}

export default Craft