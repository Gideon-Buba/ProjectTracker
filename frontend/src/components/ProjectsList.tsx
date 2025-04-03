import { useState, useEffect } from "react";
import { getAllProjects, Project } from "../api/project.api";
import { BiPlus } from "react-icons/bi";

const ProjectsList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string>("");

  const loadProjects = async () => {
    try {
      const data: Project[] = await getAllProjects();
      setProjects(data);
    } catch (err) {
      setError("Failed to load projects.");
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div className="container">
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <BiPlus
          className="cursor-pointer text-gray-400 hover:text-white transition duration-300"
          onClick={() => {}}
        />
      </div>

      <hr className="mb-4" />

      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition duration-300"
          >
            <p className="text-sm">{project.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
