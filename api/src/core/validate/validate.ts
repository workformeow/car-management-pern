import type { Request, Response, NextFunction } from 'express'
import { ZodType } from 'zod'

export function validate(schema: ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
      const errorMessage = result.error.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      }))

      return res.status(400).json({ error: errorMessage })
    }
    req.body = result.data
    next()
  }
}
