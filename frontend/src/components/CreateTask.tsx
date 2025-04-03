import { useState } from "react";
import { createTask, getTaskById } from "../api/task.api";

interface Task {
  id?: number;
  title: string;
  description?: string;
  project_id: number;
  created_by: number;
  assigned_to: number;
  due_date: string;
  status: "pending" | "in_progress" | "completed";
}

const CreateTask = () => {
  const [taskData, setTaskData] = useState<Task>({
    title: "",
    description: "",
    project_id: 1, // Replace with actual project ID
    created_by: 1, // Replace with actual user ID
    assigned_to: 2, // Replace with actual user ID
    due_date: "",
    status: "pending",
  });

  const [message, setMessage] = useState("");
  const [taskId, setTaskId] = useState(""); // For fetching task
  const [fetchedTask, setFetchedTask] = useState<Task | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]:
        name === "status"
          ? (value as "pending" | "in_progress" | "completed")
          : value, // Ensure type safety
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createTask(taskData);
      if (response.error) {
        setMessage(`Error: ${response.error}`);
      } else {
        setMessage("Task created successfully!");
        setTaskData({
          title: "",
          description: "",
          project_id: 1,
          created_by: 1,
          assigned_to: 2,
          due_date: "",
          status: "pending",
        });
      }
    } catch (error) {
      setMessage("Failed to create task.");
    }
  };

  const handleFetchTask = async () => {
    if (!taskId) {
      setMessage("Please enter a task ID.");
      return;
    }
    try {
      const task = await getTaskById(Number(taskId));
      setFetchedTask(task);
      setMessage("");
    } catch (error) {
      setMessage("Task not found.");
      setFetchedTask(null);
    }
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={taskData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Task Description"
          value={taskData.description}
          onChange={handleChange}
        />

        <input
          type="date"
          name="due_date"
          value={taskData.due_date}
          onChange={handleChange}
          required
        />

        <select name="status" value={taskData.status} onChange={handleChange}>
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button type="submit">Create Task</button>
      </form>

      <h3>Get Task by ID</h3>
      <input
        type="number"
        placeholder="Enter Task ID"
        value={taskId}
        onChange={(e) => setTaskId(e.target.value)}
      />
      <button onClick={handleFetchTask}>Fetch Task</button>

      {fetchedTask && (
        <div>
          <h4>Task Details</h4>
          <p>
            <strong>Title:</strong> {fetchedTask.title}
          </p>
          <p>
            <strong>Description:</strong> {fetchedTask.description}
          </p>
          <p>
            <strong>Status:</strong> {fetchedTask.status}
          </p>
          <p>
            <strong>Due Date:</strong>{" "}
            {new Date(fetchedTask.due_date).toLocaleDateString()}
          </p>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateTask;
