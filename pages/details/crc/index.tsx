import { useEffect } from 'react'
import Image from 'next/image'
import ColorSection from '../../../components/animations/ColorSection'
import { FadeY } from '../../../components/animations'
import DetailsNav from '../../../components/nav/DetailsNavDark'

const CrcDetails: React.FC = () => {
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
      {/* <DetailsNavLight /> */}
      <DetailsNav />

      {/* HERO */}
      <ColorSection id="HeroIntro" bgColor="bg-black">
        <FadeY className="pt-64 mx-auto max-w-screen-2xl">
          <Image
            className="w-full mx-auto"
            src={'/img/mockup/mixtape/mt-hand.webp'}
            alt={''}
            width={2753}
            height={2843}
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

export default CrcDetails
;``
