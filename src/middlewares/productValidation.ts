import { Response, Request, NextFunction } from 'express';
import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export default async function productValidation(req: Request, res: Response, next: NextFunction) {
  const { body } = req;

  const { error } = productSchema.validate(body);
  if (error) {
    const httpStatus = error.message.includes('required') ? 400 : 422;
    return res.status(httpStatus).json({ message: error.message });
  }

  next();
}