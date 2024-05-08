import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ isValid: boolean }>
) {
  const { password } = req.body
  const isValid = password === process.env.PASSWORD_KLOVE // Securely compare the password
  res.status(200).json({ isValid })
}
