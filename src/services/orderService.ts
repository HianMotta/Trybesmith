import orderModel from '../models/orderModel';

const getOrders = async () => {
  const orders = await orderModel.getOrders();
  return orders;
};

const createOrder = async (productsIds: Array<number>, userId: number) => {
  const order = await orderModel.createOrder(productsIds, userId);
  return order;
};

export default {
  getOrders,
  createOrder,
};