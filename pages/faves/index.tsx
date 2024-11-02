import React, { useEffect } from 'react'
import { FadeY } from '../../components/animations'
import ContainedImageCard from '../../components/cards/ContainedImageCard'
import ImageCard from '../../components/cards/ImageCard'
import DoodleHeartAnimate from '../../components/svg/DoodleHeartAnimate'
import { appFaveData } from '../../data/appFaveData'
import { podcastData } from '../../data/podcastData'
import DetailsNavDark from '../../components/nav/DetailsNavDark'

type Props = {}

const Index = (props: Props) => {
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
      <DetailsNavDark />
      <section id="Faves" className="w-full py-8 pt-32 selection:bg-orange-200">
        <div className="relative z-20 flex flex-col justify-center max-w-5xl px-8 mx-auto">
          <FadeY delay={0.25}>
            <DoodleHeartAnimate
              startColor={'#dc2626'}
              endColor={'#facc15'}
              className="w-12 mb-2 lg:mx-auto lg:mb-2 lg:w-32"
              strokeWidth={2}
            />
          </FadeY>
          <h1 className="mb-4 text-4xl text-white font-clash lg:mb-8 lg:text-center lg:text-9xl">
            <FadeY delay={0.5}>Faves</FadeY>
          </h1>
          <FadeY delay={0.75}>
            <p className="max-w-2xl mx-auto font-mono text-sm leading-loose text-zinc-500 lg:text-center">
              Just a few of my favorite things.
            </p>
          </FadeY>
        </div>
      </section>

      {/* PODCASTS */}
      <section className="py-8 border-t bg-gradient-to-t from-black via-white/5 to-white/5 border-zinc-900">
        <div className="px-8 pb-4">
          <h2 className="mb-1 text-2xl text-white lg:pt-6 font-clash lg:text-3xl">
            Podcasts
          </h2>
          <p className="max-w-md font-mono text-sm leading-normal text-white/50">
            These are some amazing podcasts with talented hosts and fascinating
            insights!
          </p>
        </div>
        <div className="relative flex w-full px-8 mx-auto overflow-x-auto selection:bg-orange-200 scrollbar-hide">
          <div className="flex space-x-4 lg:space-x-8 snap-x snap-mandatory">
            {podcastData.map((podcast) => (
              <div
                key={podcast.keyId}
                className="flex-none w-40 lg:w-64 snap-start">
                <ImageCard
                  imageUrl={podcast.imageUrl}
                  altText={podcast.altText}
                  title={podcast.title}
                  credit={podcast.credit}
                  url={podcast.url}
                  btnTitle={podcast.btnTitle}
                  rounded="rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPS */}
      <section className="py-8 border-t bg-gradient-to-t from-black via-white/5 to-white/5 border-zinc-900">
        <div className="px-8 pb-4">
          <h2 className="mb-1 text-2xl text-white lg:pt-6 font-clash lg:text-3xl">
            Apps
          </h2>
          <p className="max-w-md font-mono text-sm leading-normal text-white/50">
            These are my top picks for showcasing great design and user-centered
            development.
          </p>
        </div>
        <div className="relative flex w-full px-8 mx-auto overflow-x-auto selection:bg-orange-200 scrollbar-hide">
          <div className="flex space-x-4 lg:space-x-8 snap-x snap-mandatory">
            {appFaveData.map((app) => (
              <div key={app.keyId} className="flex-none snap-start">
                <ContainedImageCard
                  imageUrl={app.imageUrl}
                  altText={app.altText}
                  title={app.title}
                  credit={app.credit}
                  url={app.url}
                />
                {/* <ImageCard
                  imageUrl={app.imageUrl}
                  altText={app.altText}
                  title={app.title}
                  credit={app.credit}
                  url={app.url}
                  btnTitle={'Download App'}
                /> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
