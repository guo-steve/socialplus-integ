import express, { Request, Response } from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

const PORT = process.env.PORT ?? 5000

app.use(express.json())
app.use(cors())

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World')
})

app.post('/social/login', async (req: Request, res: Response) => {
  const { userId } = req.body

  console.log(`User with ID: ${userId} logged in`)

  const { data: authTokenResult } = await axios.post(
    'https://apix.sg.amity.co/api/v4/authentication/token',
    { userId },
    {
      headers: {
        'x-server-key': process.env.SP_SERVER_KEY,
        'Content-Type': 'application/json',
      },
    }
  )

  res.json({
    authenticationToken: authTokenResult,
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
