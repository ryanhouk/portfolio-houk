import React, { useEffect, useState } from 'react'

type PlayerStats = {
  id: number
  playerName: string
  gamesPerSeason: number
  grade: string
  colorValue: string
  seasons: Record<string, number | null>
}

const playerStats: PlayerStats[] = [
  {
    id: 1,
    playerName: 'Nikola Jokic',
    gamesPerSeason: 72,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 72, 2022: 74, 2023: 69 },
  },
  {
    id: 2,
    playerName: 'Luka Doncic',
    gamesPerSeason: 68,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 66, 2022: 65, 2023: 70 },
  },
  {
    id: 3,
    playerName: 'Giannis Antetokounmpo',
    gamesPerSeason: 65,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 61, 2022: 67, 2023: 63 },
  },
  {
    id: 4,
    playerName: 'Shai Gilgeous-Alexander',
    gamesPerSeason: 62,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 56, 2022: 61, 2023: 68 },
  },
  {
    id: 5,
    playerName: 'Joel Embiid',
    gamesPerSeason: 58,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 51, 2022: 68, 2023: 66 },
  },
  {
    id: 6,
    playerName: 'Jayson Tatum',
    gamesPerSeason: 74,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 72, 2022: 76, 2023: 74 },
  },
  {
    id: 7,
    playerName: 'Stephen Curry',
    gamesPerSeason: 64,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 63, 2022: 64, 2023: 56 },
  },
  {
    id: 8,
    playerName: 'LeBron James',
    gamesPerSeason: 56,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 45, 2022: 56, 2023: 55 },
  },
  {
    id: 9,
    playerName: 'Kevin Durant',
    gamesPerSeason: 52,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 35, 2022: 55, 2023: 47 },
  },
  {
    id: 10,
    playerName: 'Anthony Edwards',
    gamesPerSeason: 72,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 72, 2022: 76, 2023: 79 },
  },
]

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
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl text-white font-object">
                      {player.playerName}
                    </p>
                    <p className="text-sm font-medium text-white/50">
                      Averages{' '}
                      <span className="font-black">
                        {player.gamesPerSeason}
                      </span>{' '}
                      games per season
                    </p>
                    <div className="flex gap-2 mt-1">
                      {Object.entries(player.seasons).map(([year, games]) => (
                        <div key={year} className="flex items-center gap-1">
                          <span className="text-xs text-white/50">{year}:</span>
                          <span className="text-xs font-medium text-white">
                            {games || '-'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <p className="text-3xl font-black text-white">
                      {player.grade}
                    </p>
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: player.colorValue }}
                    />
                  </div>
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
