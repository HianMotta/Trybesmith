import { RowDataPacket } from 'mysql2';
import { TOrder } from '../types';
import connection from './connection';

const getOrders = async (): Promise<TOrder[]> => {
  const query = `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) as productsIds
  FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
  ON o.id = p.order_id GROUP BY o.id`;
  const [result] = await connection.execute<RowDataPacket[] & TOrder[]>(query);
  return result;
};

export default {
  getOrders,
};