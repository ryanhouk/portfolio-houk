import React from 'react'

type Props = {
  className?: string
}

const Vscode = ({ className }: Props) => {
  return (
    <>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        x="0"
        y="0"
        viewBox="0 0 48 48">
        <path
          fill="#29b6f6"
          d="M44 11.11v25.78c0 1.27-.79 2.4-1.98 2.82l-8.82 4.14L34 33V15l-.8-10.85 8.82 4.14A2.98 2.98 0 0144 11.11z"></path>
        <path
          fill="#0277bd"
          d="M9 33.896L34 15V5.353c0-1.198-1.482-1.758-2.275-.86L4.658 29.239a2 2 0 00.107 3.032s1.324 1.232 1.803 1.574c.736.525 1.703.585 2.432.051z"></path>
        <path
          fill="#0288d1"
          d="M9 14.104L34 33v9.647c0 1.198-1.482 1.758-2.275.86L4.658 18.761a2 2 0 01.107-3.032s1.324-1.232 1.803-1.574c.736-.525 1.703-.585 2.432-.051z"></path>
      </svg>
    </>
  )
}

export default Vscode