import { Request, Response } from 'express';
import productService from '../services/productService';

const createProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const product = await productService.createProduct(body);
  return res.status(201).json(product);
};

const getProducts = async (_req: Request, res: Response) => {
  const products = await productService.getProducts();
  return res.status(200).json(products);
};

export default {
  createProduct,
  getProducts,
};