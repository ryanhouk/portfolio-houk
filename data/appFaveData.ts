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
    credit: 'Genre',
    url: 'https://pocketcasts.com/',
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
]
