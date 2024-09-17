import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ParallaxHero from '../../../components/heroes/ParallaxHero'
import DetailsNavDark from '../../../components/nav/DetailsNavDark'
import { FadeY } from '../../../components/animations'

const CrcDetails: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    // Ensure the user has access before displaying the page
    const hasAccess = localStorage.getItem('hasAccess_klove')
    if (hasAccess !== 'true') {
      // If not, redirect back to the password entry page
      router.push('/enter-password')
    }
  }, [router])

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
      {/* NAV */}
      <DetailsNavDark />

      {/* HERO */}
      <FadeY>
        <ParallaxHero
          backgroundImageUrl={'/img/mockup/emf/emf-mob.webp'}
          textContent={'Educational Media Foundation'}
        />
      </FadeY>

      <div className="h-screen bg-black"></div>
    </>
  )
}

export default CrcDetails
