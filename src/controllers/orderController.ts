import { Request, Response } from 'express';
import orderService from '../services/orderService';

const getOrders = async (_req: Request, res: Response) => {
  const orders = await orderService.getOrders();
  return res.status(200).json(orders);
};

const createOrder = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const { id } = req.body.user;
  const order = await orderService.createOrder(productsIds, id);
  return res.status(201).json(order);
};

export default {
  getOrders,
  createOrder,
};