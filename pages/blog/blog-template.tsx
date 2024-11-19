import React from 'react'

type Props = {}

const BlogTemplate = (props: Props) => {
  return (
    <>
      <section className="flex items-center h-screen px-8 py-12 bg-black lg:py-64 selection:bg-orange-200">
        <h1 className="max-w-6xl mx-auto text-2xl text-white lg:leading-tight lg:text-7xl font-object">
          Accessibility in web design & the responsibility of developers
        </h1>
      </section>
    </>
  )
}

export default BlogTemplate
