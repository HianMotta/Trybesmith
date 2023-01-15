import { Router } from 'express';
import productController from '../controllers/productController';

const route = Router();

route.post('/products', productController.createProduct);

export default route;