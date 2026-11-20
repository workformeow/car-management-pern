import 'dotenv/config'

export interface EnvConfig {
  PORT: number
}

export const env: EnvConfig = {
  PORT: Number(process.env.PORT),
}
