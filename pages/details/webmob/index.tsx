import { useEffect } from 'react'
import { useRouter } from 'next/router'
import DetailsHeader from '../../../components/header/DetailsHeader'
import DetailsNav from '../../../components/nav/DetailsNav'
import IconDevices from '../../../components/svg/IconDevices'

const WebmobDetails: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    // Ensure the user has access before displaying the page
    const hasAccess = localStorage.getItem('hasAccess_webmob')
    if (hasAccess !== 'true') {
      // If not, redirect back to the password entry page
      router.push('/enter-password')
    }
  }, [router])

  return (
    <>
      {/* NAV */}
      <DetailsNav />

      {/* HERO */}
      <section className="bg-white overflow-clip">
        <DetailsHeader
          icon={
            <IconDevices
              startColor={'#dc2626'}
              endColor={'#facc15'}
              className="w-10 lg:w-16"
            />
          }
          title={'Title Goes Here'}
          imgSrc={`/img/mockup/klove/web/tv-player-bottom.jpg`}
        />
      </section>

      {/* INTRO TEXT */}
      <section className="px-6 py-12 bg-black lg:py-48">
        <div className="grid mx-auto lg:grid-cols-2 max-w-7xl">
          <div className="col-span-1">
            <h2 className="mb-4 text-xl tracking-wide text-white font-object lg:text-6xl">
              About this project
            </h2>
            <p className="leading-relaxed text-white">
              Chocolate cake powder cookie candy canes chocolate bar. Powder
              chocolate powder powder jelly bonbon tootsie roll toffee.
              Chocolate macaroon biscuit cheesecake topping candy dessert
              marshmallow. Chocolate cake carrot cake icing carrot cake sweet
              gummi bears jelly.
            </p>
            <div className="mt-12">
              <h3 className="text-white font-object">My Role:</h3>
              <p className="text-white/60">
                Design &middot; UX &middot; Development
              </p>
            </div>
          </div>
          {/* <div className="col-span-1 lg:mt-20">
            <h3 className="text-white font-object">My Role:</h3>
            <p className="text-white/60">
              Design &middot; UX &middot; Development
            </p>
          </div> */}
        </div>
      </section>

      {/* INFO */}
      <section className="py-64 bg-black">INFO</section>
    </>
  )
}

export default WebmobDetails
