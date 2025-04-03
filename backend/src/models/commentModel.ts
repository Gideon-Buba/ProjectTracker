import pool from "../config/db";
import { RowDataPacket } from "mysql2";

export interface Comment {
  id?: number;
  task_id: number;
  user_id: number;
  content: string;
  created_at?: Date;
  updated_at?: Date;
}

export const createComment = async (comment: Comment): Promise<Comment> => {
  const [result] = await pool.execute<RowDataPacket[]>(
    "INSERT INTO comments (task_id, user_id, content) VALUES (?, ?, ?)",
    [comment.task_id, comment.user_id, comment.content]
  );
  const insertId = (result as any).insertId;
  return { ...comment, id: insertId };
};

export const getCommentsByTaskId = async (
  task_id: number
): Promise<Comment[]> => {
  const [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * FROM comments WHERE task_id = ?",
    [task_id]
  );
  return rows as Comment[];
};
