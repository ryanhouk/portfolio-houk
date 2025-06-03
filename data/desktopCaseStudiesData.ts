export type DesktopItem = {
  keyId: number
  href: string
  title: string
  description: string
  imgSrc: string
  alt: string
  category: string
  caseStudy: boolean
}

export const desktopCaseStudiesData: DesktopItem[] = [
  {
    keyId: 1,
    href: '/',
    title: 'P4O Platform',
    description: `Led the design & development of a platform that supercharged internal content reviewers to use AI to speed up their review process, increasing team efficiency and accuracy by more than 10x.`,
    imgSrc: '/img/mockup/klove/web/apple-tv.webp',
    alt: 'two iphones with media rich app interfaces',
    category: 'AI · Web · App',
    caseStudy: true,
  },
  {
    keyId: 3,
    href: '/',
    title: 'WebMob Site',
    description:
      'Developed an internal website that enables stakeholders to monitor project progress and access style guides, fostering greater transparency and collaboration.',
    imgSrc: '/img/mockup/webmob/wm-open.png',
    alt: '',
    category: 'Website',
    caseStudy: true,
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
    caseStudy: true,
  },
  {
    keyId: 5,
    href: '/details/crc/',
    title: 'Crisis Response',
    description:
      'Designed and developed a training platform for emergency responders with a focus on accessibility, achieving a WCAG compliance score of 96%.',
    imgSrc: '/img/mockup/crc/crc-open-an.webp',
    category: 'Website',
    alt: '',
    caseStudy: true,
  },
  {
    keyId: 6,
    href: '/',
    title: 'Donor Cloud',
    description:
      'Redesigned & developed a donation experience, increasing the completion rate by 35%, and created a donor platform for managing donor information, enhancing user engagement and data management.',
    imgSrc: '/img/mockup/donorcloud/form-open-an.png',
    category: 'Web App',
    alt: '',
    caseStudy: true,
  },
  {
    keyId: 7,
    href: '/',
    title: 'Educational Media Foundation',
    description:
      'For outsourced design projects, I act as a developer and mentor to junior designers, providing feedback before ultimately developing the final product.',
    imgSrc: '/img/mockup/emf/emf-open-an.png',
    category: 'Website',
    alt: '',
    caseStudy: true,
  },
]