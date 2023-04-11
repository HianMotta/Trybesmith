import { Response, Request, NextFunction } from 'express';
import Joi from 'joi';

const orderSchema = Joi.array().items(Joi.number().integer()).min(1).required()
  .messages({
    'any.required': '"productsIds" is required',
    'array.base': '"productsIds" must be an array',
    'array.min': '"productsIds" must include only numbers',
    'number.base': '"productsIds" must include only numbers',
  });

export default async function orderValidation(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;

  const { error } = orderSchema.validate(productsIds);

  if (error) {
    const httpStatus = error.message.includes('required') ? 400 : 422;
    return res.status(httpStatus).json({ message: error.message });
  }

  next();
}