import { useEffect } from 'react'
import { useRouter } from 'next/router'
import DetailsHeader from '../../../components/header/DetailsHeader'
import DetailsNav from '../../../components/nav/DetailsNav'
import IconDevices from '../../../components/svg/IconDevices'
import { FadeY } from '../../../components/animations'
import Image from 'next/image'
import Figma from '../../../components/svg/logos/Figma'
import StyledText from '../../../components/typography/StyledText'
import Vscode from '../../../components/svg/logos/Vscode'
import Tailwind from '../../../components/svg/logos/Tailwind'
import ReactLogo from '../../../components/svg/logos/ReactLogo'

const KloveDetails: React.FC = () => {
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
          title={'Media Platforms'}
          imgSrc={`/img/mockup/klove/mob/kl-unify-02-open.png`}
        />
      </section>

      {/* INTRO */}
      <section className="bg-black">
        <div className="grid lg:grid-cols-2">
          <div className="max-w-xl col-span-1 px-6 py-12 mx-auto lg:py-48">
            <FadeY>
              <h2 className="mb-2 text-xl tracking-wide text-white font-object lg:text-2xl">
                Problem:
              </h2>
              <p className="mb-4 font-mono text-sm leading-relaxed text-zinc-400">
                Too many disparate apps creating confusion for customers and
                spreading customer attention across disconnected platforms.
              </p>
              <p className="font-mono text-sm leading-relaxed text-zinc-400">
                Some customers complained about a poor experience using the app,
                which was outsourced for design and development. Additionally,
                other customers were unaware of the content offered by the
                company. For example, music listeners were unaware of podcasts
                and video content, and vice versa.
              </p>
            </FadeY>
            <FadeY delay={0.25} className="mt-12">
              <h3 className="mb-2 text-xl tracking-wide text-white font-object lg:text-2xl">
                Solution:
              </h3>
              <p className="font-mono text-sm leading-relaxed text-zinc-400">
                To tackle these issues, I took the lead in combining three
                different apps into one smooth customer experience. We brought
                the design process in-house to have better control and respond
                faster to feedback. I revamped the app&apos;s structure to
                highlight all content types, making it simple for users to find
                and enjoy music, podcasts, and videos. By creating a flexible
                design system, I made sure the app looked great and was easy to
                use. Working closely with key stakeholders, we streamlined the
                customer journey and made the overall experience more cohesive
                and intuitive.
              </p>
            </FadeY>
            <FadeY delay={0.25} className="mt-12">
              <h3 className="mb-2 text-xl tracking-wide text-white font-object lg:text-2xl">
                My Role:
              </h3>
              <p className="font-mono text-sm leading-relaxed text-zinc-400">
                Lead Product Designer
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <div className="flex items-center justify-center w-12 h-12">
                  <Figma className="w-full h-full" />
                </div>
                <div className="flex items-center justify-center w-12 h-12">
                  <Vscode className="w-full h-full" />
                </div>
                <div className="flex items-center justify-center w-12 h-12">
                  <Tailwind className="w-full h-full" />
                </div>
                <div className="flex items-center justify-center w-12 h-12">
                  <ReactLogo className="w-full h-full" />
                </div>
              </div>
            </FadeY>
          </div>
          <FadeY
            delay={0.25}
            className="flex items-center w-full h-full col-span-1 overflow-hidden bg-white/5">
            <Image
              className="w-full mx-auto mt-16 lg:mt-32 lg:w-4/5"
              src={'/img/mockup/klove/mob/dual-open.png'}
              alt={''}
              width={1920}
              height={1440}
            />
          </FadeY>
        </div>
      </section>

      {/* THE APPS */}
      <section className="border-t bg-gradient-to-t from-white/5 to-black border-white/5">
        <div className="mx-auto my-12 lg:my-32 max-w-7xl">
          <FadeY className="max-w-lg px-6">
            <p className="mb-2 text-sm font-medium text-transparent uppercase bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text">
              01
            </p>
            <h3 className="mb-2 text-xl tracking-wide text-white font-object lg:text-2xl">
              Audit Disparate Apps
            </h3>
            <StyledText>
              The home view of three media apps for music, video, and podcasts
              shows a dramatic variation in design and experience. <br />
              <br /> I first conducted an audit of each app, grouping the
              content into buckets, identifying common patterns, and creating an
              IA map.
            </StyledText>
          </FadeY>
        </div>
        <Image
          className="w-full"
          src={'/img/mockup/klove/screens/all-bg.jpeg'}
          alt={''}
          width={1179}
          height={2556}
        />
      </section>

      {/* INFO ARC */}
      <section className="bg-black">
        <div className="mx-auto my-12 lg:my-32 max-w-7xl">
          <FadeY className="max-w-lg px-6">
            <p className="mb-2 text-sm font-medium text-transparent uppercase bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text">
              02
            </p>
            <h3 className="mb-2 text-xl tracking-wide text-white font-object lg:text-2xl">
              Create Information Architecture
            </h3>
            <StyledText>
              After grouping the content, patterns, and flows, I created an IA
              map to guide each view and workflow. <br />
              <br />
              Gaining stakeholder and PM buy-in on the information architecture
              is crucial. By clearly communicating the benefits and aligning the
              IA with business goals, we can ensure everyone is on the same
              page. <br />
              <br />
              Once we have their support, we can create a product roadmap with
              phased releases, allowing us to prioritize features, manage
              resources efficiently, and deliver incremental value to users.
              This structured approach helps maintain momentum and keeps the
              project on track.
            </StyledText>
          </FadeY>
        </div>
        <FadeY
          delay={0.25}
          className="flex items-center w-full h-full col-span-2 overflow-hidden bg-white/5">
          <Image
            className="w-full mx-auto lg:max-w-screen-2xl"
            src={'/img/mockup/klove/screens/ia-open.png'}
            alt={''}
            width={1920}
            height={1440}
          />
        </FadeY>
      </section>

      {/* DESIGN PROCESS */}
      <section className="bg-black">
        <div className="mx-auto my-12 lg:my-32 max-w-7xl">
          <FadeY className="max-w-lg px-6">
            <p className="mb-2 text-sm font-medium text-transparent uppercase bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text">
              03
            </p>
            <h3 className="mb-2 text-xl tracking-wide text-white font-object lg:text-2xl">
              Begin Design
            </h3>
            <StyledText>
              When starting the design process for this app, finding the right
              approach can vary. Sometimes, wireframes are essential to map out
              the basic structure and flow. But if the brand and design system
              are already established, jumping straight into high-fidelity
              designs can work just as well. It all depends on what best serves
              the project
            </StyledText>
          </FadeY>
        </div>
        {/* DESIGN CONTENT */}
        <FadeY
          delay={0.25}
          className="grid gap-8 px-8 mx-auto mb-32 max-w-7xl lg:gap-16 lg:grid-cols-4">
          <div className="col-span-4 border lg:col-span-2 rounded-3xl bg-gradient-to-b from-white/5 border-zinc-800 to-black overflow-clip">
            <Image
              src={'/img/mockup/klove/screens/icon-left.png'}
              alt={''}
              height={1440}
              width={1920}
            />
          </div>
          <div className="col-span-4 border lg:col-span-2 rounded-3xl bg-gradient-to-b from-white/5 border-zinc-800 to-black overflow-clip">
            <Image
              src={'/img/mockup/klove/screens/icon-right.png'}
              alt={''}
              height={1440}
              width={1920}
            />
          </div>
          <div className="flex items-center col-span-4 border rounded-3xl bg-gradient-to-b from-white/5 border-zinc-800 to-black overflow-clip lg:h-full h-72">
            <Image
              className="scale-[3.5] lg:scale-125 lg:py-16"
              src={'/img/mockup/klove/screens/special-cards.png'}
              alt={''}
              height={1440}
              width={1920}
            />
          </div>
        </FadeY>
        <div className="bg-white/5">
          <Image
            className="w-full mx-auto max-w-screen-2xl"
            src={'/img/mockup/klove/mob/kl-3-up.png'}
            alt={''}
            width={1179}
            height={2556}
          />
          <Image
            className="w-full mx-auto border-t max-w-screen-2xl border-white/10"
            src={'/img/mockup/klove/mob/play-3-up.png'}
            alt={''}
            width={1179}
            height={2556}
          />
          <Image
            className="w-full mx-auto border-t max-w-screen-2xl border-white/10"
            src={'/img/mockup/klove/mob/collect-3-up.png'}
            alt={''}
            width={1179}
            height={2556}
          />
        </div>
      </section>
    </>
  )
}

export default KloveDetails
