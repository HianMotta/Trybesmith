import { Request, Response } from 'express';
import productService from '../services/productService';

const createProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const product = await productService.createProduct(body);
  return res.status(201).json(product);
};

export default {
  createProduct,
};