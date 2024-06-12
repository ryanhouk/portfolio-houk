import React, { useEffect } from 'react'
import GifShow from '../components/sections/GifShow'
import Link from 'next/link'

type Props = {}

const Custom404 = (props: Props) => {
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
      <section className="flex flex-col items-center justify-center w-full h-screen px-4 selection:bg-orange-200">
        <div className="mb-4">
          <h1 className="text-5xl text-center text-white font-clash lg:text-9xl">
            404
          </h1>
          <p className="font-mono text-center text-zinc-500">
            Doh! Something went wonky and the page can&apos;t be found.
          </p>
        </div>
        <GifShow />
        <Link
          href={'/'}
          className="px-8 py-3 mt-4 text-white transition-all duration-300 border-2 border-white rounded-full font-object hover:bg-white hover:text-black">
          Back to ryanhouk.com
        </Link>
      </section>
    </>
  )
}

export default Custom404
