import { Router } from 'express';
import productController from '../controllers/productController';
import userController from '../controllers/userController';

const route = Router();

route.post('/products', productController.createProduct);
route.get('/products', productController.getProducts);

route.post('/users', userController.userRegister);

export default route;