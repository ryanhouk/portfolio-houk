import React from 'react'
import { FadeY } from '../animations'
import DoodleHeartAnimate from '../svg/DoodleHeartAnimate'
import { appFaveData } from '../../data/appFaveData'
import { podcastData } from '../../data/podcastData'
import { mediaData } from '../../data/mediaData'
import ContainedImageCard from '../cards/ContainedImageCard'
import ImageCard from '../cards/ImageCard'

const FaveThings = () => {
  return (
    <>
      <section
        id="Faves"
        className="w-full py-8 mt-12 lg:mt-52 selection:bg-orange-200">
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
          {/* <FadeY delay={1} className="flex mt-8 lg:justify-center">
            <LinkButton url={'/faves'} title={'Explore More'} />
          </FadeY> */}
        </div>
      </section>

      {/* <section className="max-w-screen-xl px-8 mx-auto mb-80">
        <FadeY delay={0.25} className="grid grid-cols-4 gap-8">
          <div className="relative col-span-1 transition-all group hover:cursor-cell">
            <Image
              className="absolute w-full mx-auto transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-16 drop-shadow-2xl"
              src={'/img/faves/elements/radiolab.webp'}
              alt=""
              width={1015}
              height={1000}
            />
            <Image
              className="absolute w-full mx-auto transition-transform duration-300 group-hover:-rotate-12 group-hover:-translate-x-16 drop-shadow-2xl"
              src={'/img/faves/elements/arc.webp'}
              alt=""
              width={1015}
              height={1000}
            />
          </div>
          <div className="relative col-span-1 transition-all group hover:cursor-cell">
            <Image
              className="absolute w-64 mx-auto transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-16 drop-shadow-2xl rotate-2"
              src={'/img/faves/elements/parks.webp'}
              alt=""
              width={977}
              height={1294}
            />
            <Image
              className="absolute w-64 mx-auto transition-transform duration-300 group-hover:-rotate-12 group-hover:-translate-x-16 drop-shadow-2xl -rotate-2"
              src={'/img/faves/elements/rm.webp'}
              alt=""
              width={977}
              height={1294}
            />
          </div>
        </FadeY>
        <FadeY
          delay={0.25}
          className="relative w-full h-full max-w-screen-xl mx-auto mt-16 transition-all group">
          <Image
            className="absolute -left-[850px] right-0 z-0 w-56 mx-auto rotate-12 lg:w-64 hover:rotate-0 transition-all group-hover:scale-110"
            src={'/img/faves/elements/radiolab.webp'}
            alt={''}
            width={1015}
            height={1000}
          />
          <Image
            className="absolute -left-[850px] hover:-left-[750px] right-0 z-0 w-56 mx-auto rotate-12 lg:w-64 hover:rotate-0 transition-all group-hover:scale-110"
            src={'/img/faves/elements/arc.webp'}
            alt={''}
            width={1015}
            height={1000}
          />
          <Image
            className="absolute right-0 mx-auto -left-[412px] -rotate-12 w-64 -top-10 z-20 hover:rotate-0 transition-all group-hover:scale-110"
            src={'/img/faves/elements/rm.webp'}
            alt={''}
            width={1508}
            height={1000}
          />
          <Image
            className="absolute -right-[500px] mx-auto left-0 rotate-12 w-72 lg:w-96 z-40 hover:rotate-0 transition-all group-hover:scale-110"
            src={'/img/faves/elements/mkbhd2.webp'}
            alt={''}
            width={1266}
            height={899}
          />
          <Image
            className="absolute right-0 mx-auto -left-[412px] -rotate-12 w-64 -top-10 z-20 hover:rotate-0 transition-all group-hover:scale-110"
            src={'/img/faves/elements/parks.webp'}
            alt={''}
            width={1508}
            height={1000}
          />
        </FadeY>
      </section> */}

      {/* PODCASTS */}
      <section className="py-8 border-t bg-gradient-to-t from-black via-white/5 to-white/5 border-zinc-900">
        <div className="px-8 pb-4">
          <h2 className="mb-1 text-2xl text-white lg:pt-6 font-clash lg:text-3xl">
            Podcasts
          </h2>
          {/* <p className="max-w-md font-mono text-sm leading-normal text-white/50">
            These are some amazing podcasts with talented hosts and fascinating
            insights!
          </p> */}
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
          {/* <p className="max-w-md font-mono text-sm leading-normal text-white/50">
            These are my top picks for showcasing great design and user-centered
            development.
          </p> */}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWS */}
      <section className="py-8 border-t bg-gradient-to-t from-black via-white/5 to-white/5 border-zinc-900">
        <div className="px-8 pb-4">
          <h2 className="mb-1 text-2xl text-white lg:pt-6 font-clash lg:text-3xl">
            TV & Movies
          </h2>
        </div>
        <div className="relative flex w-full px-8 mx-auto overflow-x-auto selection:bg-orange-200 scrollbar-hide">
          <div className="flex space-x-4 lg:space-x-8 snap-x snap-mandatory">
            {mediaData.map((media) => (
              <div
                key={media.keyId}
                className="flex-none w-40 lg:w-64 snap-start">
                <ImageCard
                  imageUrl={media.imageUrl}
                  altText={media.altText}
                  title={media.title}
                  credit={media.credit}
                  url={media.url}
                  btnTitle={media.btnTitle}
                  rounded="rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FaveThings
