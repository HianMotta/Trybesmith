import { Response, Request, NextFunction } from 'express';
import jwt from '../jwtFunctions';

export default function jwtValidation(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) res.status(401).json({ message: 'Token not found' });

  try {
    const payload = jwt.tokenValidation(authorization as string);
    req.body.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}