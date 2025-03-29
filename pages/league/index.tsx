import React, { useEffect } from 'react'
import { StaticImageData } from 'next/image'
import PlayerCard from './league-components/PlayerCard'

// IMAGES
import PaoloImage from './league-images/paolo.webp'
import ShaiImage from './league-images/shai.webp'

type PlayerData = {
  id: number
  playerImage: StaticImageData
  teamName: string
}

const playerData: PlayerData[] = [
  {
    id: 1,
    playerImage: PaoloImage,
    teamName: 'Playoff Paolo',
  },
  {
    id: 2,
    playerImage: ShaiImage,
    teamName: 'Playoff Paolo',
  },
  {
    id: 3,
    playerImage: ShaiImage,
    teamName: 'Playoff Paolo',
  },
  {
    id: 4,
    playerImage: ShaiImage,
    teamName: 'Playoff Paolo',
  },
  {
    id: 5,
    playerImage: ShaiImage,
    teamName: 'Playoff Paolo',
  },
  {
    id: 6,
    playerImage: ShaiImage,
    teamName: 'Playoff Paolo',
  },
  {
    id: 7,
    playerImage: ShaiImage,
    teamName: 'Playoff Paolo',
  },
  {
    id: 8,
    playerImage: ShaiImage,
    teamName: 'Playoff Paolo',
  },
  {
    id: 9,
    playerImage: ShaiImage,
    teamName: 'Playoff Paolo',
  },
  {
    id: 10,
    playerImage: ShaiImage,
    teamName: 'Playoff Paolo',
  },
]

const League = () => {
  useEffect(() => {
    // Save the current body background color
    const originalBackgroundColor = document.body.style.backgroundColor

    // Set the body background to the desired color when the component mounts
    document.body.style.backgroundColor = 'black'

    // Revert back to the original color when the component unmounts
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor
    }
  }, [])

  return (
    <>
      <section className="h-screen overflow-hidden">
        <div className="flex items-center h-full gap-8 px-8 py-12 overflow-x-auto">
          <div className="flex items-center gap-8">
            {playerData.map((player) => (
              <PlayerCard
                key={player.id}
                playerImage={player.playerImage}
                teamName={player.teamName}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default League
