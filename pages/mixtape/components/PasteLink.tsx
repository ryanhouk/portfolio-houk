import React from 'react'
import IconPaste from '../svg/IconPaste'

const PasteLink = () => {
  return (
    <div className="flex flex-col justify-end h-[852px]">
      {/* PASTE BUTTON: This div is positioned at the bottom of its flex container */}
      <div
        id="PasteButton"
        className="mx-4 mt-auto mb-[302px] p-[1px] bg-gradient-to-b from-blue-600/80 to-purple-500/20 rounded-[10px]">
        <div className="flex items-center justify-center w-full h-[50px] text-white text-[17px] bg-black/60 rounded-[9px] hover:bg-black/40 transition-all cursor-pointer">
          <IconPaste className="w-5 mr-2 text-white" />
          Paste Link
        </div>
      </div>
    </div>
  )
}

export default PasteLink
