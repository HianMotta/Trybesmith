import productModel from '../models/productModel';
import { TProduct } from '../types';

const createProduct = async (product: TProduct) => {
  const result = await productModel.createProduct(product);
  return result;
};

const getProducts = async () => {
  const result = await productModel.getProducts();
  return result;
};

export default { 
  createProduct,
  getProducts,
};