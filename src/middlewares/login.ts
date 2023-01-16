import { Response, Request, NextFunction } from 'express';
import userModel from '../models/userModel';

export default async function login(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  
  if (!body.username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!body.password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  const user = await userModel.findByUsername(body.username);
  
  if (!user || body.password !== user.password) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  
  const { id, username } = user;
  req.body.user = { id, username };

  next();
}
