import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { env } from './core/config'
import { connectDatabase } from './core/database/prisma'
import { LOG } from './shared/const'

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.listen(env.PORT, () => {
  console.log(LOG.SERVER.listening(env.BASE_URL))
  connectDatabase()
})
