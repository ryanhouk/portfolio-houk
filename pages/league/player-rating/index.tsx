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
  {
    id: 11,
    playerName: 'Anthony Davis',
    gamesPerSeason: 54,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 36, 2022: 40, 2023: 56 },
  },
  {
    id: 12,
    playerName: 'Jalen Brunson',
    gamesPerSeason: 68,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 68, 2022: 72, 2023: 65 },
  },
  {
    id: 13,
    playerName: 'Victor Wembanyama',
    gamesPerSeason: 70,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: null, 2022: null, 2023: null },
  },
  {
    id: 14,
    playerName: 'Tyrese Haliburton',
    gamesPerSeason: 63,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 58, 2022: 77, 2023: 56 },
  },
  {
    id: 15,
    playerName: 'Devin Booker',
    gamesPerSeason: 67,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 68, 2022: 53, 2023: 74 },
  },
  {
    id: 16,
    playerName: 'Donovan Mitchell',
    gamesPerSeason: 69,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 53, 2022: 67, 2023: 68 },
  },
  {
    id: 17,
    playerName: 'Jaylen Brown',
    gamesPerSeason: 71,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 72, 2022: 66, 2023: 67 },
  },
  {
    id: 18,
    playerName: 'Ja Morant',
    gamesPerSeason: 52,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 57, 2022: 63, 2023: 25 },
  },
  {
    id: 19,
    playerName: 'Kawhi Leonard',
    gamesPerSeason: 48,
    grade: 'D',
    colorValue: '#fb8500',
    seasons: { 2021: 52, 2022: 0, 2023: 58 },
  },
  {
    id: 20,
    playerName: 'Paul George',
    gamesPerSeason: 56,
    grade: 'D',
    colorValue: '#fb8500',
    seasons: { 2021: 54, 2022: 31, 2023: 56 },
  },
  {
    id: 21,
    playerName: 'Tyrese Maxey',
    gamesPerSeason: 68,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 75, 2022: 60, 2023: 69 },
  },
  {
    id: 22,
    playerName: 'Damian Lillard',
    gamesPerSeason: 55,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 52, 2022: 29, 2023: 58 },
  },
  {
    id: 23,
    playerName: 'Jimmy Butler',
    gamesPerSeason: 59,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 52, 2022: 57, 2023: 64 },
  },
  {
    id: 24,
    playerName: 'Bam Adebayo',
    gamesPerSeason: 71,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 72, 2022: 56, 2023: 75 },
  },
  {
    id: 25,
    playerName: "De'Aaron Fox",
    gamesPerSeason: 69,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 59, 2022: 73, 2023: 65 },
  },
  {
    id: 26,
    playerName: 'Zion Williamson',
    gamesPerSeason: 42,
    grade: 'D',
    colorValue: '#fb8500',
    seasons: { 2021: 61, 2022: 0, 2023: 29 },
  },
  {
    id: 27,
    playerName: 'Domantas Sabonis',
    gamesPerSeason: 75,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 72, 2022: 79, 2023: 74 },
  },
  {
    id: 28,
    playerName: 'Kyrie Irving',
    gamesPerSeason: 48,
    grade: 'D',
    colorValue: '#fb8500',
    seasons: { 2021: 54, 2022: 29, 2023: 60 },
  },
  {
    id: 29,
    playerName: 'Lauri Markkanen',
    gamesPerSeason: 66,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 61, 2022: 68, 2023: 66 },
  },
  {
    id: 30,
    playerName: 'Paolo Banchero',
    gamesPerSeason: 73,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: null, 2022: null, 2023: null },
  },
  {
    id: 31,
    playerName: 'Trae Young',
    gamesPerSeason: 68,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 63, 2022: 76, 2023: 73 },
  },
  {
    id: 32,
    playerName: 'Jamal Murray',
    gamesPerSeason: 48,
    grade: 'D',
    colorValue: '#fb8500',
    seasons: { 2021: 48, 2022: 0, 2023: 65 },
  },
  {
    id: 33,
    playerName: 'Pascal Siakam',
    gamesPerSeason: 67,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 56, 2022: 68, 2023: 71 },
  },
  {
    id: 34,
    playerName: 'Chet Holmgren',
    gamesPerSeason: 72,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: null, 2022: null, 2023: null },
  },
  {
    id: 35,
    playerName: 'Karl-Anthony Towns',
    gamesPerSeason: 54,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 50, 2022: 74, 2023: 29 },
  },
  {
    id: 36,
    playerName: 'Scottie Barnes',
    gamesPerSeason: 72,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 74, 2022: 77, 2023: 67 },
  },
  {
    id: 37,
    playerName: 'Rudy Gobert',
    gamesPerSeason: 72,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 71, 2022: 66, 2023: 70 },
  },
  {
    id: 38,
    playerName: 'James Harden',
    gamesPerSeason: 62,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 44, 2022: 65, 2023: 58 },
  },
  {
    id: 39,
    playerName: 'Jalen Williams',
    gamesPerSeason: 75,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: null, 2022: null, 2023: null },
  },
  {
    id: 40,
    playerName: 'Derrick White',
    gamesPerSeason: 71,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 64, 2022: 70, 2023: 74 },
  },
  {
    id: 41,
    playerName: 'Kristaps Porzingis',
    gamesPerSeason: 53,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 43, 2022: 51, 2023: 65 },
  },
  {
    id: 42,
    playerName: 'Jrue Holiday',
    gamesPerSeason: 67,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 59, 2022: 67, 2023: 63 },
  },
  {
    id: 43,
    playerName: 'Alperen Sengun',
    gamesPerSeason: 72,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 72, 2022: 75, 2023: 69 },
  },
  {
    id: 44,
    playerName: 'Mikal Bridges',
    gamesPerSeason: 82,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 72, 2022: 82, 2023: 81 },
  },
  {
    id: 45,
    playerName: 'Jaren Jackson Jr.',
    gamesPerSeason: 58,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 11, 2022: 78, 2023: 63 },
  },
  {
    id: 46,
    playerName: 'Brandon Ingram',
    gamesPerSeason: 55,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 61, 2022: 45, 2023: 64 },
  },
  {
    id: 47,
    playerName: 'Evan Mobley',
    gamesPerSeason: 74,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 69, 2022: 79, 2023: 72 },
  },
  {
    id: 48,
    playerName: 'Desmond Bane',
    gamesPerSeason: 63,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 68, 2022: 58, 2023: 62 },
  },
  {
    id: 49,
    playerName: 'LaMelo Ball',
    gamesPerSeason: 48,
    grade: 'D',
    colorValue: '#fb8500',
    seasons: { 2021: 51, 2022: 36, 2023: 58 },
  },
  {
    id: 50,
    playerName: 'DeMar DeRozan',
    gamesPerSeason: 74,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 71, 2022: 76, 2023: 74 },
  },
  {
    id: 51,
    playerName: 'Cade Cunningham',
    gamesPerSeason: 52,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 64, 2022: 12, 2023: 80 },
  },
  {
    id: 52,
    playerName: 'Julius Randle',
    gamesPerSeason: 67,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 71, 2022: 72, 2023: 77 },
  },
  {
    id: 53,
    playerName: 'OG Anunoby',
    gamesPerSeason: 58,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 43, 2022: 48, 2023: 67 },
  },
  {
    id: 54,
    playerName: 'Franz Wagner',
    gamesPerSeason: 78,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 79, 2022: 80, 2023: 76 },
  },
  {
    id: 55,
    playerName: 'Dejounte Murray',
    gamesPerSeason: 73,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 67, 2022: 74, 2023: 78 },
  },
  {
    id: 56,
    playerName: 'Darius Garland',
    gamesPerSeason: 60,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 54, 2022: 68, 2023: 69 },
  },
  {
    id: 57,
    playerName: 'Aaron Gordon',
    gamesPerSeason: 70,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 75, 2022: 68, 2023: 72 },
  },
  {
    id: 58,
    playerName: 'Jarrett Allen',
    gamesPerSeason: 63,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 56, 2022: 68, 2023: 73 },
  },
  {
    id: 59,
    playerName: 'Fred VanVleet',
    gamesPerSeason: 65,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 52, 2022: 69, 2023: 73 },
  },
  {
    id: 60,
    playerName: 'Draymond Green',
    gamesPerSeason: 58,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 63, 2022: 46, 2023: 73 },
  },
  {
    id: 61,
    playerName: 'Myles Turner',
    gamesPerSeason: 65,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 47, 2022: 62, 2023: 74 },
  },
  {
    id: 62,
    playerName: 'Bradley Beal',
    gamesPerSeason: 48,
    grade: 'D',
    colorValue: '#fb8500',
    seasons: { 2021: 40, 2022: 57, 2023: 50 },
  },
  {
    id: 63,
    playerName: 'Coby White',
    gamesPerSeason: 69,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 69, 2022: 61, 2023: 74 },
  },
  {
    id: 64,
    playerName: 'Khris Middleton',
    gamesPerSeason: 52,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 68, 2022: 33, 2023: 62 },
  },
  {
    id: 65,
    playerName: 'Herbert Jones',
    gamesPerSeason: 73,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 78, 2022: 66, 2023: 76 },
  },
  {
    id: 66,
    playerName: 'Brook Lopez',
    gamesPerSeason: 56,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 78, 2022: 13, 2023: 78 },
  },
  {
    id: 67,
    playerName: 'Austin Reaves',
    gamesPerSeason: 76,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 64, 2022: 82, 2023: 82 },
  },
  {
    id: 68,
    playerName: 'Deandre Ayton',
    gamesPerSeason: 62,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 69, 2022: 58, 2023: 67 },
  },
  {
    id: 69,
    playerName: 'Marcus Smart',
    gamesPerSeason: 59,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 48, 2022: 71, 2023: 61 },
  },
  {
    id: 70,
    playerName: 'Michael Porter Jr.',
    gamesPerSeason: 55,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 61, 2022: 9, 2023: 62 },
  },
  {
    id: 71,
    playerName: 'Kyle Kuzma',
    gamesPerSeason: 70,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 68, 2022: 66, 2023: 74 },
  },
  {
    id: 72,
    playerName: 'Zach LaVine',
    gamesPerSeason: 58,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 58, 2022: 77, 2023: 35 },
  },
  {
    id: 73,
    playerName: 'Jerami Grant',
    gamesPerSeason: 63,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 54, 2022: 47, 2023: 63 },
  },
  {
    id: 74,
    playerName: 'RJ Barrett',
    gamesPerSeason: 70,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 72, 2022: 70, 2023: 73 },
  },
  {
    id: 75,
    playerName: 'Walker Kessler',
    gamesPerSeason: 74,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: null, 2022: null, 2023: null },
  },
  {
    id: 76,
    playerName: 'Tyler Herro',
    gamesPerSeason: 60,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 54, 2022: 67, 2023: 57 },
  },
  {
    id: 77,
    playerName: 'Andrew Wiggins',
    gamesPerSeason: 62,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 71, 2022: 73, 2023: 37 },
  },
  {
    id: 78,
    playerName: 'Josh Giddey',
    gamesPerSeason: 75,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 76, 2022: 70, 2023: 80 },
  },
  {
    id: 79,
    playerName: 'Bojan Bogdanovic',
    gamesPerSeason: 62,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 59, 2022: 69, 2023: 57 },
  },
  {
    id: 80,
    playerName: 'Alex Caruso',
    gamesPerSeason: 58,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 41, 2022: 64, 2023: 67 },
  },
  {
    id: 81,
    playerName: 'Kevon Looney',
    gamesPerSeason: 74,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 61, 2022: 82, 2023: 82 },
  },
  {
    id: 82,
    playerName: 'Clint Capela',
    gamesPerSeason: 62,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 52, 2022: 74, 2023: 65 },
  },
  {
    id: 83,
    playerName: 'Dillon Brooks',
    gamesPerSeason: 67,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 54, 2022: 72, 2023: 73 },
  },
  {
    id: 84,
    playerName: 'Jusuf Nurkic',
    gamesPerSeason: 53,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 37, 2022: 56, 2023: 52 },
  },
  {
    id: 85,
    playerName: 'Jordan Clarkson',
    gamesPerSeason: 69,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 68, 2022: 79, 2023: 61 },
  },
  {
    id: 86,
    playerName: 'Nikola Vucevic',
    gamesPerSeason: 73,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 70, 2022: 73, 2023: 76 },
  },
  {
    id: 87,
    playerName: 'Jalen Green',
    gamesPerSeason: 72,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 67, 2022: 76, 2023: 82 },
  },
  {
    id: 88,
    playerName: 'Tobias Harris',
    gamesPerSeason: 69,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 62, 2022: 73, 2023: 74 },
  },
  {
    id: 89,
    playerName: 'Chris Paul',
    gamesPerSeason: 58,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 70, 2022: 65, 2023: 59 },
  },
  {
    id: 90,
    playerName: 'Russell Westbrook',
    gamesPerSeason: 65,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 65, 2022: 78, 2023: 52 },
  },
  {
    id: 91,
    playerName: 'Al Horford',
    gamesPerSeason: 60,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 69, 2022: 28, 2023: 63 },
  },
  {
    id: 92,
    playerName: 'Cameron Johnson',
    gamesPerSeason: 59,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 60, 2022: 42, 2023: 75 },
  },
  {
    id: 93,
    playerName: 'Nic Claxton',
    gamesPerSeason: 61,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 47, 2022: 32, 2023: 76 },
  },
  {
    id: 94,
    playerName: 'Bruce Brown',
    gamesPerSeason: 68,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 65, 2022: 72, 2023: 80 },
  },
  {
    id: 95,
    playerName: 'Klay Thompson',
    gamesPerSeason: 60,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 0, 2022: 32, 2023: 69 },
  },
  {
    id: 96,
    playerName: 'Buddy Hield',
    gamesPerSeason: 77,
    grade: 'A',
    colorValue: '#38b000',
    seasons: { 2021: 72, 2022: 81, 2023: 80 },
  },
  {
    id: 97,
    playerName: "D'Angelo Russell",
    gamesPerSeason: 67,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 76, 2022: 65, 2023: 71 },
  },
  {
    id: 98,
    playerName: 'Mike Conley',
    gamesPerSeason: 62,
    grade: 'B',
    colorValue: '#219ebc',
    seasons: { 2021: 51, 2022: 72, 2023: 67 },
  },
  {
    id: 99,
    playerName: 'Malcolm Brogdon',
    gamesPerSeason: 56,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 64, 2022: 36, 2023: 67 },
  },
  {
    id: 100,
    playerName: 'Anfernee Simons',
    gamesPerSeason: 58,
    grade: 'C',
    colorValue: '#ffbe0b',
    seasons: { 2021: 57, 2022: 0, 2023: 62 },
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
