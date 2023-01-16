import { Response, Request } from 'express';
import userService from '../services/userService';
import jwtFunctions from '../jwtFunctions';

const userRegister = async (req: Request, res:Response) => {
  const { body } = req;
  const register = await userService.userRegister(body);
  if (!register) {
    return res.status(400).json({ error: 'Something wrong' });
  }
  const jwt = jwtFunctions.generateToken(body);
  return res.status(201).json({ token: jwt });
};

const userLogin = async (req: Request, res: Response) => {
  const { username, id } = req.body.user;
  const jwt = jwtFunctions.loginToken({ id, username });
  return res.status(200).json({ token: jwt });
};

export default {
  userRegister,
  userLogin,
};