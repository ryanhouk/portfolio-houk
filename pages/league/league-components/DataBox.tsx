import React from 'react'

type Props = {
  number: number
  title: string
}

const DataBox = ({ number, title }: Props) => {
  return (
    <>
      <div className="p-px rounded-3xl bg-gradient-to-t from-white/10 to-white/0 border-white/10">
        <div className="rounded-[23px] h-72 flex flex-col items-center justify-center bg-transparent">
          <p className="text-center text-white text-8xl font-clash">{number}</p>
          <p className="font-mono text-center text-white/40">{title}</p>
        </div>
      </div>
    </>
  )
}

export default DataBox
