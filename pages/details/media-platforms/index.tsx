import { useEffect } from 'react'
import Image from 'next/image'
import { FadeY } from '../../../components/animations'
import DetailsNav from '../../../components/nav/DetailsNavDark'
import IconDevices from '../../../components/svg/IconDevices'
import Figma from '../../../components/svg/logos/Figma'
import Vscode from '../../../components/svg/logos/Vscode'
import Tailwind from '../../../components/svg/logos/Tailwind'
import ReactLogo from '../../../components/svg/logos/ReactLogo'
import StyledText from '../../../components/typography/StyledText'

const MediaPlatformsDetails: React.FC = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'black'
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  return (
    <>
      <DetailsNav />

      {/* HERO */}
      <section className="pt-24 mx-auto max-w-screen-3xl lg:pt-60">
        <FadeY delay={0.5} className="max-w-xs px-6 mx-auto mb-10 text-center md:max-w-4xl xl:max-w-5xl">
          <div className="flex justify-center">
            <IconDevices startColor={'#dc2626'} endColor={'#facc15'} className="w-10 lg:w-16" />
          </div>
          <h1 className="text-5xl font-clash selection:bg-orange-200 md:text-7xl xl:text-9xl">
            Media Platforms
          </h1>
        </FadeY>
        <motion.div className="w-full max-w-6xl mx-auto">
          <Image 
            src="/img/mockup/klove/mob/kl-3-up.png"
            width={1500} 
            height={1000}
            alt="Media platforms interface showcase"
            className="w-full"
          />
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="bg-black">
        <div className="grid lg:grid-cols-2">
          <div className="max-w-xl col-span-1 px-6 py-12 mx-auto lg:py-48">
            <FadeY>
              <h2 className="mb-2 text-xl tracking-wide text-white font-object lg:text-2xl">
                Problem:
              </h2>
              <StyledText>
                Multiple disconnected platforms were creating confusion for users and fragmenting the audience across different apps. Content discovery was limited, with music listeners unaware of podcast and video content, and vice versa.
              </StyledText>
            </FadeY>
            
            <FadeY delay={0.25} className="mt-12">
              <h3 className="mb-2 text-xl tracking-wide text-white font-object lg:text-2xl">
                Solution:
              </h3>
              <StyledText>
                Led the unification of three separate apps into one cohesive experience. Brought design in-house for better control and faster iteration. Restructured the information architecture to highlight all content types and created a flexible design system for consistent usability.
              </StyledText>
            </FadeY>

            <FadeY delay={0.5} className="mt-12">
              <h3 className="mb-2 text-xl tracking-wide text-white font-object lg:text-2xl">
                Role & Tools:
              </h3>
              <p className="mb-4 font-mono text-sm leading-relaxed text-zinc-400">
                Lead Product Designer & Developer
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12">
                  <Figma className="h-10" />
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

          <FadeY delay={0.25} className="flex items-center w-full h-full col-span-1 overflow-hidden bg-white/5">
            <Image
              className="w-full mx-auto mt-16 lg:mt-32 lg:w-4/5"
              src="/img/mockup/klove/mob/dual-open.png"
              alt="Media platform interface showcase"
              width={1920}
              height={1440}
            />
          </FadeY>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t bg-gradient-to-t from-white/5 to-black border-white/5">
        <div className="mx-auto my-12 lg:my-32 max-w-7xl">
          <FadeY className="max-w-lg px-6">
            <p className="mb-2 text-sm font-medium text-transparent uppercase bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text">
              01 Process
            </p>
            <h3 className="mb-2 text-xl tracking-wide text-white font-object lg:text-2xl">
              Research & Discovery
            </h3>
            <StyledText>
              Started with a comprehensive audit of existing apps, analyzing user feedback and usage patterns. Conducted stakeholder interviews to understand business goals and technical constraints. Created user personas and journey maps to identify pain points and opportunities.
            </StyledText>
          </FadeY>
        </div>
        <Image
          className="w-full"
          src="/img/mockup/klove/screens/all-bg.jpeg"
          alt="Process and research documentation"
          width={1179}
          height={2556}
        />
      </section>

      {/* OUTCOME */}
      <section className="bg-black">
        <div className="mx-auto my-12 lg:my-32 max-w-7xl">
          <FadeY className="max-w-lg px-6">
            <p className="mb-2 text-sm font-medium text-transparent uppercase bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text">
              02 Outcome
            </p>
            <h3 className="mb-2 text-xl tracking-wide text-white font-object lg:text-2xl">
              Results & Impact
            </h3>
            <StyledText>
              The unified platform increased cross-content discovery by 45%. User engagement metrics showed a 30% increase in time spent in-app and a 25% rise in content sharing. The new design system reduced development time for new features by 40%.
            </StyledText>
          </FadeY>
        </div>
        <FadeY delay={0.25} className="grid gap-8 px-8 mx-auto mb-32 max-w-7xl lg:gap-16 lg:grid-cols-2">
          <div className="col-span-2 border lg:col-span-1 rounded-3xl bg-gradient-to-b from-white/5 border-zinc-800 to-black overflow-clip">
            <Image
              src="/img/mockup/klove/screens/icon-left.png"
              alt="Platform interface design"
              height={1440}
              width={1920}
            />
          </div>
          <div className="col-span-2 border lg:col-span-1 rounded-3xl bg-gradient-to-b from-white/5 border-zinc-800 to-black overflow-clip">
            <Image
              src="/img/mockup/klove/screens/icon-right.png"
              alt="Platform interface showcase"
              height={1440}
              width={1920}
            />
          </div>
        </FadeY>
      </section>
    </>
  )
}

export default MediaPlatformsDetails