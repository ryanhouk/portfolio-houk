import React, { useEffect } from 'react'
import Image from 'next/image'

type Props = {}

const BlogTemplate = (props: Props) => {
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
      <section className="flex flex-col items-center px-8 selection:bg-orange-200">
        <p>TAGS</p>
        <h1 className="max-w-6xl py-12 mx-auto text-2xl text-white lg:py-64 lg:leading-tight lg:text-6xl font-object">
          Accessibility in web design & the responsibility of developers
        </h1>
      </section>
      <Image
        className="w-full max-w-screen-xl px-8 mx-auto"
        src={'/img/blog/blog-access.webp'}
        alt={''}
        width={1400}
        height={764}
      />
    </>
  )
}

export default BlogTemplate
