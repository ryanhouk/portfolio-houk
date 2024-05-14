import React from 'react'
import IconPaste from '../svg/IconPaste'

type Props = {}

const PasteLink = (props: Props) => {
  return (
    <>
      <div className="flex-col justify-end h-full">
        {/* PASTE BUTTON */}
        <div className="flex p-[1px] rounded-[10px] bg-gradient-to-b from-blue-600/80 to-purple-500/20 mx-4">
          <div className="flex justify-center text-white text-[17px] items-center w-full h-[50px] rounded-[9px] bg-black/60 hover:bg-black/40 transition-all hover:cursor-pointer">
            <IconPaste className="w-5 mr-2 text-white" />
            Paste Link
          </div>
        </div>
      </div>
    </>
  )
}

export default PasteLink
