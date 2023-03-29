import { Response, Request, NextFunction } from 'express';
import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export default async function userValidation(req: Request, res: Response, next: NextFunction) {
  const { body } = req;

  const { error } = userSchema.validate(body);
  if (error) {
    const httpStatus = error.message.includes('required') ? 400 : 422;
    return res.status(httpStatus).json({ message: error.message });
  }

  next();
}