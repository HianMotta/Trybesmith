import { Router } from 'express';
import productController from '../controllers/productController';

const route = Router();

route.post('/products', productController.createProduct);
route.get('/products', productController.getProducts);

export default route;