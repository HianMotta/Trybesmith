import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { TUser } from './types';

const secret: string | undefined = process.env.JWT_SECRET;

const generateToken = (user: TUser) => {
  const payload = { username: user.username };
  return jwt.sign(
    payload, 
    secret as string,
    { algorithm: 'HS256', expiresIn: '1d' },
  );
};

const loginToken = (user: TUser) => {
  const payload = { id: user.id, username: user.username };
  return jwt.sign(
    payload,
    secret as string,
    { algorithm: 'HS256', expiresIn: '1d' },
  );
};

const tokenValidation = (token: string): string | JwtPayload => jwt.verify(token, secret as Secret);

export default {
  generateToken,
  loginToken,
  tokenValidation,
};