import React, { useEffect } from 'react'
import TabNav from '../components/TabNav'

type Props = {}

const EmptyHomeView = (props: Props) => {
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
          <div className="flex flex-col justify-end h-full">
            <TabNav />
          </div>
        </div>
      </div>
    </>
  )
}

export default EmptyHomeView
