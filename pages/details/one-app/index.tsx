import { useEffect } from 'react'
import Image from 'next/image'
import ColorSection from '../../../components/animations/ColorSection'
import { FadeY } from '../../../components/animations'
import DetailsNav from '../../../components/nav/DetailsNavDark'

const OneAppDetails: React.FC = () => {
  useEffect(() => {
    // Set an initial body background color when the component mounts
    document.body.style.backgroundColor = '#000' // Initial color

    // Cleanup: Revert the background when the component unmounts
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  return (
    <>
      {/* NAV */}
      <DetailsNav />

      {/* HERO */}
      <ColorSection id="HeroIntro" bgColor="bg-black">
        <FadeY className="relative w-full mx-auto h-[80vh] max-w-screen-3xl overflow-clip">
          <div className="absolute bottom-0 w-full h-96 bg-gradient-to-t from-black to-black/0"></div>
          <div className="absolute left-0 hidden h-full w-96 bg-gradient-to-r from-black to-black/0 lg:flex"></div>
          <div className="absolute right-0 hidden h-full w-96 bg-gradient-to-l from-black to-black/0 lg:flex"></div>
          <Image
            className="object-cover object-center h-full"
            src={'/img/mockup/one-app/feature-hero-one-app.jpg'}
            alt={''}
            width={4500}
            height={3375}
          />
        </FadeY>
      </ColorSection>

      <ColorSection
        id="CaseDetails1"
        bgColor="bg-red-500"
        className="h-screen text-white">
        <h2>Section 1</h2>
        <p>
          This section will fade the body background to red when it enters the
          viewport.
        </p>
      </ColorSection>

      <ColorSection
        id="CaseDetails2"
        bgColor="bg-green-500"
        className="h-screen text-white">
        <h2>Section 2</h2>
        <p>
          This section will fade the body background to green when it enters the
          viewport.
        </p>
      </ColorSection>
    </>
  )
}

export default OneAppDetails
;``
