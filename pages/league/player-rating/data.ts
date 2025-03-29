import { StaticImageData } from 'next/image'

export type PlayerStats = {
  id: number
  playerName: string
  gamesPerSeason: number
  grade: string
  colorValue: string
}

export const playerStats: PlayerStats[] = [
  {
    id: 1,
    playerName: 'Paolo Banchero',
    gamesPerSeason: 72,
    grade: 'A',
    colorValue: '',
  },
  {
    id: 2,
    playerName: 'Shai Gilgeous-Alexander',
    gamesPerSeason: 68,
    grade: 'A',
    colorValue: '',
  },
  {
    id: 3,
    playerName: 'Victor Wembanyama',
    gamesPerSeason: 65,
    grade: 'A',
    colorValue: '',
  },
  {
    id: 4,
    playerName: 'Jalen Brunson',
    gamesPerSeason: 70,
    grade: 'A',
    colorValue: '',
  },
  {
    id: 5,
    playerName: 'Tyrese Haliburton',
    gamesPerSeason: 69,
    grade: 'A',
    colorValue: '',
  },
  {
    id: 6,
    playerName: 'Anthony Edwards',
    gamesPerSeason: 71,
    grade: 'A',
    colorValue: '',
  },
  {
    id: 7,
    playerName: 'Cade Cunningham',
    gamesPerSeason: 64,
    grade: 'B',
    colorValue: '',
  },
  {
    id: 8,
    playerName: 'Scottie Barnes',
    gamesPerSeason: 73,
    grade: 'A',
    colorValue: '',
  },
  {
    id: 9,
    playerName: 'Franz Wagner',
    gamesPerSeason: 70,
    grade: 'A',
    colorValue: '',
  },
  {
    id: 10,
    playerName: 'Jabari Smith Jr.',
    gamesPerSeason: 67,
    grade: 'B',
    colorValue: '',
  },
]
