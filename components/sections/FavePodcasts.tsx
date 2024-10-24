import React, { useState } from 'react'
import { FadeY } from '../animations'
import ImageCard from '../cards/ImageCard'
import DoodleHeartAnimate from '../svg/DoodleHeartAnimate'
import { podcastData } from '../../data/podcastData'
// import { appFaveData } from '../../data/appFaveData'

type Props = {}

const FavePodcasts = (props: Props) => {
  return (
    <>
      <section
        id="Faves"
        className="w-full py-8 mt-12 border-t lg:mt-24 lg:pt-24 bg-gradient-to-t from-black via-white/5 to-white/5 border-zinc-900 selection:bg-orange-200">
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
      <h2 className="px-8 text-2xl text-white font-clash lg:text-3xl">
        Podcasts
      </h2>
      <section className="relative flex w-full px-8 pt-4 pb-8 mx-auto overflow-x-auto lg:pb-32 selection:bg-orange-200">
        <div className="flex space-x-8 snap-x snap-mandatory">
          {podcastData.map((podcast) => (
            <div
              key={podcast.keyId}
              className="flex-none w-48 lg:w-80 snap-start">
              <ImageCard
                imageUrl={podcast.imageUrl}
                altText={podcast.altText}
                title={podcast.title}
                credit={podcast.credit}
                url={podcast.url}
              />
            </div>
          ))}
        </div>
      </section>

      {/* APPS */}
      {/* <h2 className="px-8 text-2xl text-white font-clash lg:text-3xl">Apps</h2>
      <section className="relative flex w-full px-8 pt-4 pb-8 mx-auto overflow-x-auto lg:pb-32 selection:bg-orange-200">
        <div className="flex space-x-8 snap-x snap-mandatory">
          {appFaveData.map((podcast) => (
            <div
              key={podcast.keyId}
              className="flex-none w-48 lg:w-80 snap-start">
              <ImageCard
                imageUrl={podcast.imageUrl}
                altText={podcast.altText}
                title={podcast.title}
                credit={podcast.credit}
                url={podcast.url}
              />
            </div>
          ))}
        </div>
      </section> */}

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

export default FavePodcasts
