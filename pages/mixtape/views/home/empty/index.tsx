import React, { useEffect } from 'react'
import TabNavEmpty from '../../../components/TabNavEmpty'
import Image from 'next/image'
import MixNavbar from '../../../components/MixNavbar'
import { FadeY } from '../../../../../components/animations'
import BackgroundGlow from '../../../../../components/animations/BackgroundGlow'

type Props = {}

const Index = (props: Props) => {
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
      <MixNavbar />

      {/* OUTER AREA */}
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <Image
          id="iphone"
          className="w-[473px] h-[932px] object-cover object-center absolute"
          src={'/img/mixtape/frames/iphone.png'}
          alt={''}
          width={473}
          height={932}
          priority // This prop ensures the image is loaded as high priority
        />
        {/* PHONE CONTAINER */}
        <div className="w-[393px] h-[852px] bg-black relative overflow-y-scroll rounded-[55px]">
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
            </div>
            {/* BG */}
            <div
              id="HeaderBackground"
              className="relative z-50 w-full h-full text-white bg-black/80 backdrop-blur-3xl"></div>
          </div>

          {/* NAV */}
          <TabNavEmpty className="absolute bottom-0 left-0 right-0 z-50" />
          <FadeY delay={0.25} className="relative p-4 mt-[550px]">
            <BackgroundGlow
              className="absolute bottom-0 z-0 mr-4 opacity-20"
              size={200}
            />
          </FadeY>
        </div>
      </div>
    </>
  )
}

export default Index
