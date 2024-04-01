import React from 'react'
import { FadeY } from '../../../components/animations'
import Image from 'next/image'
import PageHeader from '../../../components/header/PageHeader'

type Props = {}

const WebMob = (props: Props) => {
  return (
    <>
      {/* HEADER */}
      <PageHeader
        title={'WebMob Site'}
        backgroundImage={'/img/mockup/internal.webp'}
      />

      <section className="px-8 pt-8 lg:pt-32">
        <div className="max-w-2xl mx-auto">
          <FadeY once className="py-12 border-y border-white/20">
            <h2 className="text-xl leading-relaxed text-white font-object lg:text-2xl">
              Internal customers require a platform to track their requests,
              create new ones, and view the latest designs. Similarly, the
              marketing team needs a place to access image specifications for
              their collateral.
            </h2>
          </FadeY>
          <FadeY once delay={0.25} className="mt-12">
            <p className="mb-2 text-lg text-red-400 font-object">Problem</p>
            <p className="font-mono text-sm leading-loose text-white">
              Internal stakeholders within our organization are experiencing
              frustration due to the scattered distribution of links and files
              across emails and Teams messages. This disorganization hampers
              efficient collaboration, leading to delays in accessing critical
              information and hindering productivity. As a result, there is a
              pressing need to implement a streamlined solution that centralizes
              document sharing and communication channels, thereby enhancing
              collaboration effectiveness and reducing stakeholder frustration.
            </p>
          </FadeY>
          <FadeY once delay={0.5} className="mt-8">
            <p className="mb-2 text-lg font-object text-emerald-400">
              Solution
            </p>
            <p className="font-mono text-sm leading-loose text-white">
              I addressed the issue of scattered links and files by launching a
              website leveraging Azure, making it easy to digest the developer
              state of tasks in flight. Additionally, I integrated a feature
              allowing customers to find their platform, view its uptime, and
              see mockups. This move not only made it easier for everyone to
              find what they needed but also enhanced transparency and trust by
              providing real-time insights into platform performance. It sped up
              collaboration and cut down on the frustration of digging through
              emails and Teams messages, making our work smoother and more
              productive.
            </p>
          </FadeY>
        </div>
      </section>

      <section className="mx-auto my-16 lg:my-32 max-w-screen-2xl">
        <FadeY once className="grid gap-8 lg:grid-cols-2">
          <div className="relative col-span-1">
            <p className="absolute bottom-0 left-0 z-10 p-2 m-1 font-mono text-sm text-white bg-black/50 backdrop-blur-2xl">
              View designed so internal customers can quickly get to where they
              need.
            </p>
            <Image
              src={`/img/details/webmob/wm-home.jpg`}
              alt={`screenshot of internal site`}
              height={2280}
              width={3480}
              className="w-full"
            />
          </div>
          <div className="relative col-span-1">
            <p className="absolute bottom-0 left-0 z-10 p-2 m-1 font-mono text-sm text-white bg-black/50 backdrop-blur-2xl">
              Platforms showcases all internal products for stakeholders to dive
              into.
            </p>
            <Image
              src={`/img/details/webmob/wm-platforms.jpg`}
              alt={`screenshot of internal site`}
              height={2280}
              width={3480}
              className="w-full"
            />
          </div>
          <div className="relative col-span-1">
            <p className="absolute bottom-0 left-0 z-10 p-2 m-1 font-mono text-sm text-white bg-black/50 backdrop-blur-2xl">
              New employees can better on board and understand application
              requirements.
            </p>
            <Image
              src={`/img/details/webmob/wm-promo-02.jpg`}
              alt={`screenshot of internal site`}
              height={2280}
              width={3480}
              className="w-full"
            />
          </div>
          <div className="relative col-span-1">
            <p className="absolute bottom-0 left-0 z-10 p-2 m-1 font-mono text-sm text-white bg-black/50 backdrop-blur-2xl">
              TEXT.
            </p>
            <Image
              src={`/img/details/webmob/wm-promo-01.jpg`}
              alt={`screenshot of internal site`}
              height={2280}
              width={3480}
              className="w-full"
            />
          </div>
        </FadeY>
      </section>
    </>
  )
}

export default WebMob
