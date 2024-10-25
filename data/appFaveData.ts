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
    imageUrl: '/img/faves/app/arc.png',
    altText: '',
    title: 'Arc Browser',
    credit: 'The Browser Co.',
    url: 'https://arc.net/',
  },
  {
    keyId: 2,
    imageUrl: '/img/faves/app/not-boring.png',
    altText: '',
    title: '!Habits',
    credit: 'Not Boring Software',
    url: 'https://www.notboring.software/',
  },
  {
    keyId: 3,
    imageUrl: '/img/faves/app/how-we-feel.png',
    altText: '',
    title: 'How We Feel',
    credit: 'Yale Non-profit',
    url: 'https://howwefeel.org/',
  },
  {
    keyId: 4,
    imageUrl: '/img/faves/app/pocketcast.png',
    altText: '',
    title: 'Pocket Casts',
    credit: 'Automattic',
    url: 'https://pocketcasts.com/',
  },
  {
    keyId: 5,
    imageUrl: '/img/faves/app/robinhood.png',
    altText: '',
    title: 'Robinhood',
    credit: 'Robinhood',
    url: 'https://robinhood.com/us/en/',
  },
  {
    keyId: 6,
    imageUrl: '/img/faves/app/cashapp.png',
    altText: '',
    title: 'Cash App',
    credit: 'Block Inc.',
    url: 'https://cash.app/',
  },
  {
    keyId: 7,
    imageUrl: '/img/faves/app/podcast.png',
    altText: '',
    title: 'Apple Podcasts',
    credit: 'Apple',
    url: 'https://apps.apple.com/us/app/apple-podcasts/id525463029',
  },
]
