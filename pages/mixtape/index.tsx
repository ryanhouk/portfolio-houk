import React, { useEffect } from 'react'
import Toggle from './Toggle'

type Props = {}

const Mixtape = (props: Props) => {
  useEffect(() => {
    // Save the current body background color
    const originalBackgroundColor = document.body.style.backgroundColor

    // Set the body background to the desired color when the component mounts
    document.body.style.backgroundColor = 'black' // or any color you prefer

    // Revert back to the original color when the component unmounts
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor
    }
  }, [])
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        {/* PHONE CONTAINER */}
        <div className="w-[390px] h-[844px] bg-black border border-white/10 relative overflow-clip rounded-[50px]">
          {/* HEADER */}
          <div id="HeaderContainer" className="h-[202px] w-full relative">
            <div className="absolute bottom-0 z-[55] w-full">
              {/* TITLE */}
              <p className="mx-4 mb-2 text-4xl font-extrabold text-white">
                Home
              </p>
              {/* SEARCH */}
              <div
                id="Search"
                placeholder="Search my stuff"
                className="h-[36px] w-[361px] text-[#EBEBF5]/[.6] flex items-center mb-4 px-3 bg-[#767680]/[.24] rounded-[10px] mx-auto">
                Search Mixtape...
              </div>
              {/* TOGGLE */}
            </div>
            {/* BG */}
            <div
              id="HeaderBackground"
              className="relative z-50 w-full h-full text-white bg-black/80 backdrop-blur-3xl"></div>
          </div>
          <Toggle />

          {/* <MixtapeView /> */}
        </div>
      </div>
    </>
  )
}

export default Mixtape