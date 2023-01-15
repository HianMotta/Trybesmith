import jwt from 'jsonwebtoken';
import { TUser } from './types';

const generateToken = (user: TUser) => {
  const payload = { username: user.username };
  return jwt.sign(
    payload, 
    process.env.JWT_SECRET as string,
    { algorithm: 'HS256', expiresIn: '1d' },
  );
};

export default {
  generateToken,
};