import pool from "../config/db";
import { RowDataPacket } from "mysql2";

export interface Project {
  id?: number;
  name: string;
  description?: string;
  created_by: number;
  created_at?: Date;
  updated_at?: Date;
}

export const createProject = async (project: Project): Promise<Project> => {
  const [result] = await pool.execute<RowDataPacket[]>(
    "INSERT INTO projects (name, description, created_by) VALUES (?, ?, ?)",
    [project.name, project.description, project.created_by]
  );
  const insertId = (result as any).insertId;
  return { ...project, id: insertId };
};

export const getProjectById = async (id: number): Promise<Project | null> => {
  const [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * FROM projects WHERE id = ?",
    [id]
  );
  return rows.length > 0 ? (rows[0] as Project) : null;
};
