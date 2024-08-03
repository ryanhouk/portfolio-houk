import Link from 'next/link'
import React from 'react'

type Props = {
  url: string
  target?: string
  title: string
}

const LinkButton = ({ url, target = '_blank', title }: Props) => {
  return (
    // <Link
    //   href={url}
    //   target={target}
    //   className="px-8 py-3 text-white transition-all duration-300 border-2 border-white rounded-full font-object hover:bg-white hover:text-black">
    //   {title}
    // </Link>
    <Link
      href={url}
      target={target}
      className="p-[1px] group rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 transition-all hover:-translate-y-1 duration-300">
      <div className="px-8 py-4 font-mono text-sm text-white transition-all duration-300 rounded-full group-hover:brightness-150 bg-gradient-to-b from-zinc-900 to-zinc-950">
        {title}
      </div>
    </Link>
  )
}

export default LinkButton
