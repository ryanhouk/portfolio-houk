export type PodcastItem = {
  keyId: number
  imageUrl: string
  altText: string
  title: string
  credit: string
  url: string
  btnTitle: string
}

export const podcastData: PodcastItem[] = [
  {
    keyId: 1,
    imageUrl: '/img/faves/podcast/planet-money.webp',
    altText: '',
    title: 'Planet Money',
    credit: 'Economics',
    url: 'https://www.npr.org/podcasts/510289/planet-money',
    btnTitle: 'Listen Now',
  },
  {
    keyId: 2,
    imageUrl: '/img/faves/podcast/the-indicator.jpg',
    altText: '',
    title: 'The Indicator',
    credit: 'Economics',
    url: 'https://www.npr.org/podcasts/510325/the-indicator-from-planet-money',
    btnTitle: 'Listen Now',
  },
  {
    keyId: 3,
    imageUrl: '/img/faves/podcast/radiolab.jpg',
    altText: '',
    title: 'Radiolab',
    credit: 'Science & Culture',
    url: 'https://radiolab.org/',
    btnTitle: 'Listen Now',
  },
  {
    keyId: 4,
    imageUrl: '/img/faves/podcast/spec-failure.jpg',
    altText: '',
    title: 'Spectacular Failures',
    credit: 'Pop Culture',
    url: 'https://www.spectacularfailures.org/',
    btnTitle: 'Listen Now',
  },
  {
    keyId: 5,
    imageUrl: '/img/faves/podcast/freak.webp',
    altText: '',
    title: 'Freakonomics',
    credit: 'Economics',
    url: 'https://freakonomics.com/podcasts/',
    btnTitle: 'Listen Now',
  },
  {
    keyId: 8,
    imageUrl: '/img/faves/podcast/whatsprob.jpg',
    altText: '',
    title: `What's Your Problem?`,
    credit: 'Economics',
    url: 'https://www.pushkin.fm/podcasts/whats-your-problem',
    btnTitle: 'Listen Now',
  },
  {
    keyId: 6,
    imageUrl: '/img/faves/podcast/stown.jpg',
    altText: '',
    title: 'S Town',
    credit: 'True Crime',
    url: 'https://podcasts.apple.com/us/podcast/s-town/id1212558767',
    btnTitle: 'Listen Now',
  },
  {
    keyId: 7,
    imageUrl: '/img/faves/podcast/dateline.jpg',
    altText: '',
    title: 'Dateline',
    credit: 'True Crime',
    url: 'https://podcasts.apple.com/us/podcast/dateline-nbc/id1464919521',
    btnTitle: 'Listen Now',
  },
]
