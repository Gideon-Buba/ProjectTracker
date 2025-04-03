import { useState, useEffect } from "react";
import {
  createProject,
  getAllProjects,
  getProjectById,
  Project,
} from "../api/project.api";

const CreateProject = () => {
  const [projectData, setProjectData] = useState<Project>({
    name: "",
    description: "",
    created_by: 1, // Replace with actual user ID
    status: "active",
  });

  const [message, setMessage] = useState("");
  const [projectId, setProjectId] = useState(""); // For fetching project
  const [fetchedProject, setFetchedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  // Fetch all projects on component mount
  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      setMessage("Failed to load projects.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setProjectData((prev) => ({
      ...prev,
      [name]:
        name === "status"
          ? (value as "active" | "inactive" | "completed")
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProject(projectData);
      setMessage("Project created successfully!");
      setProjectData({
        name: "",
        description: "",
        created_by: 1,
        status: "active",
      });
      loadProjects(); // Refresh project list after creation
    } catch (error) {
      setMessage("Failed to create project.");
    }
  };

  const handleFetchProject = async () => {
    if (!projectId) {
      setMessage("Please enter a project ID.");
      return;
    }
    try {
      const project = await getProjectById(Number(projectId));
      setFetchedProject(project);
      setMessage("");
    } catch (error) {
      setMessage("Project not found.");
      setFetchedProject(null);
    }
  };

  return (
    <div>
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={projectData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={projectData.description}
          onChange={handleChange}
        />
        <select
          name="status"
          value={projectData.status}
          onChange={handleChange}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">Create Project</button>
      </form>

      <h3>Get Project by ID</h3>
      <input
        type="number"
        placeholder="Enter Project ID"
        value={projectId}
        onChange={(e) => setProjectId(e.target.value)}
      />
      <button onClick={handleFetchProject}>Fetch Project</button>

      {fetchedProject && (
        <div>
          <h4>Project Details</h4>
          <p>
            <strong>Name:</strong> {fetchedProject.name}
          </p>
          <p>
            <strong>Description:</strong> {fetchedProject.description}
          </p>
          <p>
            <strong>Status:</strong> {fetchedProject.status}
          </p>
        </div>
      )}

      <h3>All Projects</h3>
      <button onClick={loadProjects}>Reload Projects</button>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <strong>{project.name}</strong> - {project.description} (
              {project.status})
            </li>
          ))}
        </ul>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateProject;
