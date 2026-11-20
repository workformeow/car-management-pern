import type { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'
import { isHttpError } from 'http-errors'
import { ERROR } from '../../shared/const'

export const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof ZodError) {
    const details = error.issues.map((issue) => ({
      path: issue.path.join('.'),
      message: issue.message,
    }))
    return res.status(400).json({ error: 'Invalid data', details })
  }

  if (isHttpError(error) && error.expose) {
    return res.status(error.status).json({ error: error.message })
  }

  console.log(error)
  res.status(500).send({ errors: [{ message: ERROR.INTERNAL_SERVER_ERROR }] })
}
