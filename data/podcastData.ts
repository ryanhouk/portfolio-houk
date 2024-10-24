export type PodcastItem = {
  keyId: number
  imageUrl: string
  altText: string
  title: string
  credit: string
  url: string
}

export const podcastData: PodcastItem[] = [
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
  {
    keyId: 8,
    imageUrl: '/img/faves/podcast/whatsprob.jpg',
    altText: '',
    title: `What's Your Problem?`,
    credit: 'Pushkin',
    url: 'https://www.pushkin.fm/podcasts/whats-your-problem',
  },
  {
    keyId: 6,
    imageUrl: '/img/faves/podcast/stown.jpg',
    altText: '',
    title: 'S Town',
    credit: 'Serial',
    url: 'https://podcasts.apple.com/us/podcast/s-town/id1212558767',
  },
  {
    keyId: 7,
    imageUrl: '/img/faves/podcast/dateline.jpg',
    altText: '',
    title: 'Dateline',
    credit: 'NBC',
    url: 'https://podcasts.apple.com/us/podcast/dateline-nbc/id1464919521',
  },
]
