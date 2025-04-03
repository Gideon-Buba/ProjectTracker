const PROJECT_API_URL = "http://localhost:3000/projects";

export interface Project {
  id?: number;
  name: string;
  description?: string;
  created_by: number;
  created_at?: Date;
  updated_at?: Date;
  status?: "active" | "inactive" | "completed";
}

export const createProject = async (projectData: Project): Promise<Project> => {
  const response = await fetch(PROJECT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });
  if (!response.ok) {
    throw new Error("Failed to create project");
  }
  return response.json();
};

export const getAllProjects = async (): Promise<Project[]> => {
  const response = await fetch(PROJECT_API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export const getProjectById = async (id: number): Promise<Project> => {
  const response = await fetch(`/api/projects/${id}`);
  if (!response.ok) {
    throw new Error("Project not found");
  }
  return response.json();
};
