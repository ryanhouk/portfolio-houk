import { useState } from 'react'

const GifShow = () => {
  const images = [
    {
      id: 1,
      url: '/img/gif/01.gif',
      alt: 'Image 1 Description',
    },
    {
      id: 2,
      url: '/img/gif/02.gif',
      alt: 'Image 2 Description',
    },
    {
      id: 3,
      url: '/img/gif/03.gif',
      alt: 'Image 3 Description',
    },
    {
      id: 4,
      url: '/img/gif/04.gif',
      alt: 'Image 3 Description',
    },
    {
      id: 5,
      url: '/img/gif/05.gif',
      alt: 'Image 3 Description',
    },
    {
      id: 6,
      url: '/img/gif/06.gif',
      alt: 'Image 3 Description',
    },
  ]

  const [randomImage, setRandomImage] = useState(images[0])

  const chooseRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length)
    setRandomImage(images[randomIndex])
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={randomImage.url} alt={randomImage.alt} className="w-64 mb-4" />
      <button
        onClick={chooseRandomImage}
        className="px-8 py-3 text-white transition-all duration-300 border-2 border-white rounded-full font-object hover:bg-white hover:text-black">
        Show Another Fail
      </button>
    </div>
  )
}

export default GifShow
