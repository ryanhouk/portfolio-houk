import React from 'react'
import { FadeY } from '../animations'
import ImageCard from '../cards/ImageCard'
import DoodleHeartAnimate from '../svg/DoodleHeartAnimate'
import { podcastData } from '../../data/podcastData'
import { appFaveData } from '../../data/appFaveData'
import ContainedImageCard from '../cards/ContainedImageCard'

type Props = {}

const FaveThings = (props: Props) => {
  return (
    <>
      <section
        id="Faves"
        className="w-full py-8 mt-12 lg:mt-24 lg:pt-24 selection:bg-orange-200">
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

      {/* <section className="grid max-w-5xl grid-cols-2 gap-8 px-8 pb-12 mx-auto lg:pt-12 lg:gap-12 selection:bg-orange-200 lg:grid-cols-3 lg:pb-32">
        {podcastData.map((podcast) => (
          <FadeY key={podcast.keyId} delay={0.25}>
            <ImageCard
              imageUrl={podcast.imageUrl}
              altText={podcast.altText}
              title={podcast.title}
              credit={podcast.credit}
              url={podcast.url}
            />
          </FadeY>
        ))}
      </section> */}
    </>
  )
}

export default FaveThings
