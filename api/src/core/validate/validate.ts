import type { Request, Response, NextFunction } from 'express'
import { ZodError, ZodType } from 'zod'

type ValidationOptions = { body?: ZodType; params?: ZodType; query?: ZodType }

export function validate(schemas: ValidationOptions) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schemas.body) {
        const validatedBody = schemas.body.parse(req.body)
        req.body = validatedBody as Request['body']
      }

      if (schemas.params) {
        const validateParams = schemas.params.parse(req.params)
        req.params = validateParams as Request['params']
      }

      if (schemas.query) {
        const validateQuery = schemas.query.parse(req.query)
        req.query = validateQuery as Request['query']
      }

      next()
    } catch (error) {
      next(error)
    }
  }
}
