import userModel from '../models/userModel';
import { TUser } from '../types';

const userRegister = async (user: TUser) => {
  const register = await userModel.userRegister(user);
  return register;
};

export default {
  userRegister,
};