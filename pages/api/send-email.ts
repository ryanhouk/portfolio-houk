import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, message } = req.body

  if (!name || !message) {
    return res.status(400).json({ message: 'Name and message are required' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: `Message from ${name}`,
    text: message,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ message: 'Message sent successfully' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Failed to send message' })
  }
}

export default handler
