import pool from "../config/db";
import { RowDataPacket } from "mysql2";

export interface Task {
  id?: number;
  title: string;
  description?: string;
  project_id: number;
  created_by: number;
  assigned_to: number;
  due_date: Date;
  status: "pending" | "in_progress" | "completed";
  created_at?: Date;
  updated_at?: Date;
}

export const createTask = async (task: Task): Promise<Task> => {
  const [result] = await pool.execute<RowDataPacket[]>(
    "INSERT INTO tasks (title, description, project_id, created_by, assigned_to, due_date, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      task.title,
      task.description,
      task.project_id,
      task.created_by,
      task.assigned_to,
      task.due_date,
      task.status,
    ]
  );
  const insertId = (result as any).insertId;
  return { ...task, id: insertId };
};

export const getTaskById = async (id: number): Promise<Task | null> => {
  const [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * FROM tasks WHERE id = ?",
    [id]
  );
  return rows.length > 0 ? (rows[0] as Task) : null;
};
