const TASK_API_URL = "http://localhost:3000/tasks";

export const createTask = async (task: {
  title: string;
  description?: string;
  project_id: number;
  created_by: number;
  assigned_to: number;
  due_date: string;
  status: "pending" | "in_progress" | "completed";
}) => {
  const response = await fetch(`${TASK_API_URL}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const getTaskById = async (taskId: number) => {
  const response = await fetch(`${TASK_API_URL}/${taskId}`);
  if (!response.ok) {
    throw new Error("Task not found");
  }
  return response.json();
};

export const getAllTasks = async () => {
  const response = await fetch(`${TASK_API_URL}/`);
  return response.json();
};
