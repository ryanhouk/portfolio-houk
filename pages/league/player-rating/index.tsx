import React, { useEffect, useState } from 'react'
import { playerStats } from './data'

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('')

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

  const filteredPlayers = playerStats.filter((player) =>
    player.playerName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <section className="min-h-screen p-8">
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search players..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 text-white border rounded-2xl bg-white/10 placeholder-white/50 border-white/10 focus:outline-none focus:border-white/20"
            />
          </div>
          <ol className="flex flex-col space-y-2">
            {filteredPlayers.map((player) => (
              <li
                key={player.id}
                className="p-4 rounded-2xl bg-gradient-to-br from-white/15 to-white/0">
                <div className="flex flex-col">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl text-white font-object">
                      {player.playerName}
                    </span>
                    <span className="text-lg text-white/70">
                      {player.grade}
                    </span>
                  </div>
                  <span className="font-mono text-sm text-white/70">
                    AGPS: {player.gamesPerSeason}
                  </span>

                  <span>{player.colorValue}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}

export default Index
