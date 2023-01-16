import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { TUser } from '../types';

const userRegister = async (user: TUser): Promise<number> => {
  const query = `INSERT INTO Trybesmith.users 
  (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    query,
    [user.username, user.vocation, user.level, user.password],
  );
  return insertId;
};

const findByUsername = async (username: string): Promise<TUser | undefined> => {
  const query = `SELECT u.id as id, u.username as username, u.password as password FROM
   Trybesmith.users AS u WHERE u.username = ?`;
  const [result] = await connection.execute<RowDataPacket[] & TUser[]>(query, [username]);
  return result[0];
};

export default {
  userRegister,
  findByUsername,
};