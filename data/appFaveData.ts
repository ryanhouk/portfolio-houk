export type AppFaveItem = {
  keyId: number
  imageUrl: string
  altText: string
  title: string
  credit: string
  url: string
}

export const appFaveData: AppFaveItem[] = [
  {
    keyId: 1,
    imageUrl: '/img/faves/podcast/planet-money.webp',
    altText: '',
    title: 'Planet Money',
    credit: 'NPR',
    url: 'https://www.npr.org/podcasts/510289/planet-money',
  },
  {
    keyId: 2,
    imageUrl: '/img/faves/podcast/the-indicator.jpg',
    altText: '',
    title: 'The Indicator',
    credit: 'NPR',
    url: 'https://www.npr.org/podcasts/510325/the-indicator-from-planet-money',
  },
  {
    keyId: 3,
    imageUrl: '/img/faves/podcast/radiolab.jpg',
    altText: '',
    title: 'Radiolab',
    credit: 'WNYC Studios',
    url: 'https://radiolab.org/',
  },
  {
    keyId: 4,
    imageUrl: '/img/faves/podcast/spec-failure.jpg',
    altText: '',
    title: 'Spectacular Failures',
    credit: 'APM Studios',
    url: 'https://www.spectacularfailures.org/',
  },
  {
    keyId: 5,
    imageUrl: '/img/faves/podcast/freak.webp',
    altText: '',
    title: 'Freakonomics',
    credit: 'Freakonomics',
    url: 'https://freakonomics.com/podcasts/',
  },
]
