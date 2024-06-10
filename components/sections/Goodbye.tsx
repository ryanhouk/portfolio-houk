import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'

interface Item {
  id: number
  imageUrl: string
}

const getRandomItem = (items: Item[]): Item => {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

const Goodbye: React.FC = () => {
  const [item, setItem] = useState<Item | null>(null)

  const data: Item[] = useMemo(
    () => [
      {
        id: 1,
        imageUrl: '/img/gif/george.gif', // Ensure these images are in the public/images directory
      },
      {
        id: 2,
        imageUrl: '/img/gif/george-02.gif',
      },
      {
        id: 3,
        imageUrl: '/img/gif/bill.gif',
      },
      {
        id: 4,
        imageUrl: '/img/gif/office.gif',
      },
      {
        id: 5,
        imageUrl: '/img/gif/david.gif',
      },
    ],
    []
  )

  const randomizeItem = useCallback(() => {
    const randomItem = getRandomItem(data)
    setItem(randomItem)
  }, [data])

  useEffect(() => {
    randomizeItem()
  }, [randomizeItem])

  if (!item) return <div>Loading...</div>

  return (
    <div className="flex flex-col justify-between h-[500px] max-w-xl mx-auto mb-32 bg-red-400 aspect-square">
      <Image
        src={item.imageUrl}
        alt={`Random item ${item.id}`}
        width={500}
        height={300}
        className="w-full"
      />
      <div className="flex justify-center mt-8">
        <button
          onClick={randomizeItem}
          className="px-8 py-3 text-white transition-all duration-300 border-2 border-white rounded-full font-object hover:bg-white hover:text-black">
          Show Me Another
        </button>
      </div>
    </div>
  )
}

export default Goodbye
