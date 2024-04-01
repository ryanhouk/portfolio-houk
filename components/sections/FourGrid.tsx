import Link from 'next/link'
import React from 'react'
import IconArrowRight from '../svg/IconArrowRight'
import { FadeY } from '../animations'
import DoodleScribble from '../svg/DoodleScribble'

// import Image from 'next/image';

type Item = {
  href: string
  title: string
  description: string
  backgroundImage: string
}

const data: Item[] = [
  {
    href: '/',
    title: 'P4O Platform',
    description: `Using AI to increase reviewers' speed and accuracy. Due to PII guidelines, this is a private project and can be discussed, but not shown.`,
    backgroundImage: '/img/mockup/phone.webp',
  },
  {
    href: '/',
    title: 'K-LOVE Platforms',
    description:
      'Crafting user-centric experiences for tvOS, iOS, Android, websites, and web applications, specifically tailored for content-rich brands.',
    backgroundImage: '/img/mockup/streaming.webp',
  },
  {
    href: '/',
    title: 'WebMob Site',
    description:
      'Developed an internal website that enables stakeholders to monitor project progress and access style guides, fostering greater transparency and collaboration.',
    backgroundImage: '/img/mockup/internal.webp',
  },
  {
    href: '/',
    title: 'Wribbn',
    description:
      'Co-founded a startup and raised funding for an all-in-one listing app. Created entry points for users to add and consume content across platforms including browser extensions and embedded content.',
    backgroundImage: '/img/mockup/wrbn.webp',
  },
  {
    href: '/',
    title: 'Crisis Response',
    description:
      'Focused on enhancing website accessibility, ensuring universal usability for all users, including those with disabilities.',
    backgroundImage: '/img/mockup/access.webp',
  },
  {
    href: '/',
    title: 'Donor Cloud',
    description:
      'Updated donor platforms for easier contribution tracking and boosting overall donations.',
    backgroundImage: '/img/mockup/account.webp',
  },
]

const FourGrid = () => {
  return (
    <>
      <section
        id="Work"
        className="relative z-20 flex flex-col justify-center max-w-5xl px-8 py-12 mx-auto scroll-mt-10 selection:bg-orange-200 lg:pt-32">
        <FadeY>
          <DoodleScribble
            startColor={'#dc2626'}
            stopColor={'#facc15'}
            className="w-24 mb-2 lg:mx-auto lg:mb-0 lg:w-44"
          />
        </FadeY>
        <h1 className="z-10 mb-4 text-4xl text-white font-clash lg:mb-8 lg:text-center lg:text-9xl">
          <FadeY delay={0.25}>Work </FadeY>
          <FadeY delay={0.5}>Highlights</FadeY>
        </h1>
        <FadeY className="relative z-20" delay={0.75}>
          <p className="max-w-2xl mx-auto font-mono text-sm leading-loose text-white opacity-60 lg:text-center">
            There is a lot of work to choose from! Here are a few highlights to
            dive into.
          </p>
        </FadeY>
      </section>

      <section className="px-8 pb-12 mx-auto max-w-7xl selection:bg-orange-200 lg:pb-32">
        <FadeY delay={0.25} className="grid gap-8 lg:grid-cols-2">
          {data.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group overflow-clip rounded-3xl border border-white/[.15] transition-all duration-300 hover:-translate-y-2">
              <div
                className="relative flex h-96 flex-col justify-end bg-cover bg-center bg-no-repeat transition-all duration-300 lg:h-[500px] lg:bg-left lg:group-hover:bg-right"
                style={{ backgroundImage: `url('${item.backgroundImage}')` }}>
                <div className="absolute bottom-0 z-0 w-full h-48 bg-gradient-to-t from-black/80 to-black/0"></div>
                <div className="absolute z-0 w-full h-full bg-black/30"></div>
                <div className="z-10 p-6 transition-all duration-300 group-hover:-translate-y-4 lg:p-8">
                  <p className="pb-4 font-mono text-sm text-orange-400">
                    Case Study Soon
                  </p>
                  <div className="flex items-center">
                    <h3 className="mb-2 text-2xl text-white font-object">
                      {item.title}
                    </h3>
                    <IconArrowRight className="hidden w-6 mb-2 ml-0 text-white transition-all duration-200 opacity-0 group-hover:ml-4 group-hover:opacity-100 lg:flex" />
                  </div>
                  <p className="font-mono text-sm leading-relaxed text-white transition-all duration-200 group-hover:text-white lg:text-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </FadeY>
      </section>
    </>
  )
}

export default FourGrid
