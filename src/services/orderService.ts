import orderModel from '../models/orderModel';

const getOrders = async () => {
  const orders = await orderModel.getOrders();
  return orders;
};

export default {
  getOrders,
};