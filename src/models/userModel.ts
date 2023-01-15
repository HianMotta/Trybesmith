import { ResultSetHeader } from 'mysql2';
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

export default {
  userRegister,
};