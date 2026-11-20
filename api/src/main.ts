import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { env } from './core/config'

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.listen(env.PORT, () => {
  console.log(`Server listening on port ${env.PORT}`)
})
