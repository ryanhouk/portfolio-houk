import React, { useState } from 'react'
import IconHome from '../svg/IconHome'
import IconMixtape from '../svg/IconMixtape'
import IconUser from '../svg/IconUser'
import PasteLink from './PasteLink'

type Props = {
  className?: string
}

const TabNav = ({ className }: Props) => {
  const [activeTab, setActiveTab] = useState<string>('home')

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName)
  }

  return (
    <>
      <div
        id="TabNavEmpty"
        className={`w-full h-[83px] bg-black/70 backdrop-blur-2xl border-t-[.5px] border-white/10 ${className}`}>
        <div className="w-[320px] mx-auto flex justify-between mt-3">
          <button
            className={`w-full ${activeTab === 'home' ? 'text-white' : 'text-white/40'}`}
            onClick={() => handleTabClick('home')}>
            <IconHome className="w-6 h-6 mx-auto" />
            <p className="text-[10px] text-center">Home</p>
          </button>
          <button
            className={`w-full ${activeTab === 'mixtapes' ? 'text-white' : 'text-white/40'}`}
            onClick={() => handleTabClick('mixtapes')}>
            <IconMixtape className="w-6 h-6 mx-auto" />
            <p className="text-[10px] text-center">Mixtapes</p>
          </button>
          <button
            className={`w-full ${activeTab === 'profile' ? 'text-white' : 'text-white/40'}`}
            onClick={() => handleTabClick('profile')}>
            <IconUser className="w-6 h-6 mx-auto" />
            <p className="text-[10px] text-center">Profile</p>
          </button>
        </div>
      </div>
      <div>
        {activeTab === 'home' && (
          <>
            <PasteLink />
          </>
        )}
        {activeTab === 'mixtapes' && (
          <>
            <div className="p-4 text-white bg-blue-500">Mixtapes</div>
          </>
        )}
        {activeTab === 'profile' && (
          <div className="p-4 text-white bg-blue-500">Profile Content</div>
        )}
      </div>
    </>
  )
}

export default TabNav
