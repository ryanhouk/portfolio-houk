import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const StyledText = ({ children }: Props) => {
  return (
    <>
      <p className="pl-6 font-mono text-sm leading-relaxed border-l border-zinc-800 text-zinc-400">
        {children}
      </p>
    </>
  )
}

export default StyledText
