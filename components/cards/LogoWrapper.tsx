import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const LogoWrapper = ({ children }: Props) => {
  return (
    <>
      <div className="relative flex items-center justify-center w-full h-48 transition-all bg-black rounded-3xl group hover:cursor-cell">
        {children}
      </div>
    </>
  )
}

export default LogoWrapper
