import { Request, Response } from 'express';
import orderService from '../services/orderService';

const getOrders = async (_req: Request, res: Response) => {
  const orders = await orderService.getOrders();
  return res.status(200).json(orders);
};

export default {
  getOrders,
};