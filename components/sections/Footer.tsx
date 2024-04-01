import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <section className="relative z-10 py-8 border-t border-white/10 selection:bg-orange-200 lg:py-16">
        <p className="max-w-4xl mx-auto font-mono text-xs text-center">
          <span className="text-white">Designed & developed by</span>{' '}
          <span className="text-transparent bg-gradient-to-tr from-red-600 to-yellow-400 bg-clip-text">
            Ryan Houk
          </span>
        </p>
      </section>
    </>
  )
}

export default Footer
