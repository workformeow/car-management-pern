import 'dotenv/config'

export interface EnvConfig {
  PORT: number
  DATABASE_URL: string
  BASE_URL: string
}

export const env: EnvConfig = {
  PORT: Number(process.env.PORT),
  DATABASE_URL: process.env.DATABASE_URL as string,
  BASE_URL: process.env.BASE_URL as string,
}
