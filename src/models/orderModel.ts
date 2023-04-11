import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { TOrder } from '../types';
import connection from './connection';

const getOrders = async (): Promise<TOrder[]> => {
  const query = `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) as productsIds
  FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
  ON o.id = p.order_id GROUP BY o.id`;
  const [result] = await connection.execute<RowDataPacket[] & TOrder[]>(query);
  return result;
};

const createOrder = async (productsIds: Array<number>, userId: number): Promise<TOrder> => {
  const [{ insertId }] = await connection.execute <ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [userId],
  );

  const update = productsIds.map((productId) => (
    connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id=? WHERE id=?',
      [insertId, productId],
    )
  ));

  await Promise.all(update);

  return { userId, productsIds };
};

export default {
  getOrders,
  createOrder,
};