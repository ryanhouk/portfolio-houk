import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  className?: string
}

const LogoWrapper = ({ children, className }: Props) => {
  return (
    <>
      <div
        className={`${className} p-[1px] bg-gradient-to-b from-white/10 to-black rounded-3xl overflow-clip transition-all duration-500`}>
        <div className="relative flex items-center justify-center w-full h-48 transition-all bg-black group hover:cursor-cell rounded-[23.5px]">
          {children}
        </div>
      </div>
    </>
  )
}

export default LogoWrapper
