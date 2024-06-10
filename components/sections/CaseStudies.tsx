import React from 'react'
import { FadeY } from '../animations'
import DoodleScribbleAnimate from '../svg/DoodleScribbleAnimate'
import FeatureCard from '../cards/FeatureCard'

type Item = {
  keyId: number
  href: string
  title: string
  description: string
  imgSrc: string
  alt: string
  category: string
}

const data: Item[] = [
  {
    keyId: 8,
    href: '/',
    title: 'Mixtape',
    description: 'A place for everything. Project details available soon.',
    imgSrc: '/img/mockup/mixtape/mt-open.png',
    alt: '',
    category: 'iOS · MacOS',
  },
  {
    keyId: 1,
    href: '/',
    title: 'P4O Platform',
    description: `Using AI to increase team members' speed and accuracy for content review. Due to PII guidelines, this is a private project and can be discussed, but not shown.`,
    imgSrc: '/img/mockup/klove/tv/tv-open.png',
    alt: 'two iphones with media rich app interfaces',
    category: 'AI · Web · App',
  },
  {
    keyId: 2,
    href: '/',
    title: 'K-LOVE Platforms',
    description:
      'Crafting user-centric experiences for tvOS, iOS, Android, websites, and web applications, specifically tailored for content-rich brands.',
    imgSrc: '/img/mockup/klove/mob/kl-dual-open.png',
    alt: 'tv OS music app with large artist photo',
    category: 'Web · iOS · Android · tvOS · Roku',
  },
  {
    keyId: 3,
    href: '/',
    title: 'WebMob Site',
    description:
      'Developed an internal website that enables stakeholders to monitor project progress and access style guides, fostering greater transparency and collaboration.',
    imgSrc: '/img/mockup/webmob/wm-open-an.png',
    category: 'Website',
    alt: '',
  },
  {
    keyId: 4,
    href: '/',
    title: 'Wribbn',
    description:
      'Co-founded a startup and raised funding for an all-in-one listing app. Created entry points for users to add and consume content across platforms including browser extensions and embedded content.',
    imgSrc: '/img/mockup/wribbn/wrbn-open.png',
    category: 'iOS · Android · Browser Ext · Web App',
    alt: '',
  },
  {
    keyId: 5,
    href: '/',
    title: 'Crisis Response',
    description:
      'Focused on enhancing website accessibility, ensuring universal usability for all users, including those with disabilities.',
    imgSrc: '/img/mockup/crc/crc-open-an.png',
    category: 'Website',
    alt: '',
  },
  {
    keyId: 6,
    href: '/',
    title: 'Donor Cloud',
    description:
      'Updated donor platforms for easier contribution tracking and boosting overall donations.',
    imgSrc: '/img/mockup/donorcloud/form-open-an.png',
    category: 'Web App',
    alt: '',
  },
  {
    keyId: 7,
    href: '/',
    title: 'EMF Site',
    description: 'Description',
    imgSrc: '/img/mockup/emf/emf-open-an.png',
    category: 'Website',
    alt: '',
  },
]

const CaseStudies = () => {
  return (
    <>
      <section
        id="Work"
        className="relative z-20 flex flex-col justify-center max-w-5xl px-8 py-12 mx-auto scroll-mt-10 selection:bg-orange-200 lg:pt-32">
        <FadeY>
          <DoodleScribbleAnimate
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

      <section className="px-8 pb-12 mx-auto max-w-screen-2xl selection:bg-orange-200 lg:pb-32">
        <FadeY delay={0.25} className="grid gap-8 lg:grid-cols-2">
          {data.map((item) => (
            <FeatureCard
              key={item.keyId}
              urlSrc={item.href}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              altText={item.alt}
              category={item.category}
            />
          ))}
        </FadeY>
      </section>
    </>
  )
}

export default CaseStudies
