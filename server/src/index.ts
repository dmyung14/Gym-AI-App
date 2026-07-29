import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { profileRouter } from './routes/profile'
import { planRouter } from './routes/plan'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3010

app.use(cors({ origin: "https://gym-ai-app-three.vercel.app" }))
app.use(cookieParser())
app.use(express.json())

// API Routes
app.use("/api/profile", profileRouter)
app.use("/api/plan", planRouter)

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
  })
}

export default app