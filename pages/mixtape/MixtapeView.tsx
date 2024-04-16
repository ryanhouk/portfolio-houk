import React from 'react'
import AnimatedCardMixtape from './AnimatedCardMixtape'

type Mixtape = {
  img: string
  title: string
}

const MixtapeView = () => {
  const data: Mixtape[] = [
    { img: 'img/mixtape/banner/tahoe.jpg', title: 'Tahoe Trip' },
    {
      img: 'img/mixtape/banner/nike-red.jpg',
      title: 'Nike SB Blazer Wishlist',
    },
    {
      img: 'img/mixtape/banner/pasta.jpg',
      title: 'Recipe: Rigatoni with Creamy Tomato Sauce',
    },
  ]

  return (
    <section className="flex flex-col p-4 gap-y-2">
      {data.map((mixtape, index) => (
        <AnimatedCardMixtape key={index} mixtape={mixtape} index={index} />
      ))}
    </section>
  )
}

export default MixtapeView
