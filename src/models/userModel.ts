import pool from "../config/db";
import { RowDataPacket } from "mysql2";

export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
}

export const createUser = async (user: User): Promise<User> => {
  const [result] = await pool.execute<RowDataPacket[]>(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [user.username, user.email, user.password]
  );
  const insertId = (result as any).insertId;
  return { ...user, id: insertId };
};

export const getUserById = async (id: number): Promise<User | null> => {
  const [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * FROM users WHERE id = ?",
    [id]
  );
  return rows.length > 0 ? (rows[0] as User) : null;
};
