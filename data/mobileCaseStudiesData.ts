export type MobileItem = {
  keyId: number
  href: string
  title: string
  description: string
  imgSrcOne: string
  imgSrcTwo: string
  alt: string
  category: string
  caseStudy: boolean
}

export const mobileCaseStudiesData: MobileItem[] = [
  {
    keyId: 1,
    href: '/',
    title: 'Media Platforms',
    description:
      'Unified disparate media platforms for podcasts, videos, and music by reworking the information architecture and designing a scalable product for a consistent user experience across Apple TV, mobile apps, and websites.',
    imgSrcOne: '/img/mockup/klove/mob/kl-3-up.png',
    imgSrcTwo: '/img/mockup/klove/mob/dual-open.png',
    alt: 'Media platform screenshots showing playlist and player interfaces',
    category: 'Web · iOS · Android · tvOS · Roku',
    caseStudy: true,
  },
  {
    keyId: 2,
    href: '/',
    title: 'Mixtape',
    description: 'A place for everything. Project details available soon.',
    imgSrcOne: '/img/mockup/mixtape/mt-home-solo.png',
    imgSrcTwo: '/img/mockup/mixtape/mt-mixtapes-solo.png',
    alt: 'Mixtape app interface screenshots',
    category: 'iOS · MacOS',
    caseStudy: true,
  },
]
