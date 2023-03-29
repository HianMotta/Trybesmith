import { Router } from 'express';
import orderController from '../controllers/orderController';
import productController from '../controllers/productController';
import userController from '../controllers/userController';
import login from '../middlewares/login';
import productValidation from '../middlewares/productValidation';

const route = Router();

route.post('/login', login, userController.userLogin);

route.post('/products', productValidation, productController.createProduct);
route.get('/products', productController.getProducts);

route.post('/users', userController.userRegister);

route.get('/orders', orderController.getOrders);

export default route;