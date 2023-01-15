import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { TProduct } from '../types';
import connection from './connection';

const createProduct = async (product: TProduct): Promise<TProduct> => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection
    .execute <ResultSetHeader>(query, [product.name, product.amount]);
  return { id: insertId, ...product };
};

const getProducts = async (): Promise<TProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute<RowDataPacket[] & TProduct[]>(query);
  return result;
};

export default {
  createProduct,
  getProducts,
};