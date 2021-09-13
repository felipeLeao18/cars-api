import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { config } from '../Config/Auth'


export function authMiddleware (req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).json({
      error: true,
      code: 130,
      message: 'Authorization error - Token unauthorized'
    })
  }

  const [, token] = authToken.split(' ')

  try {
    const isDecoded = verify(token, config.secret)

    if (!isDecoded) {
      return res.status(401).json({
        error: true,
        code: 130,
        message: 'Token expired'
      })
    }
    return next()
  } catch {
    return res.status(401).json({
      error: true,
      code: 130,
      message: 'Invalid token'
    })
  }
}
