import ProjectsList from "./ProjectsList";
import { FaHome, FaProjectDiagram, FaGithub } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5 flex flex-col shadow-lg">
      {/* Sidebar Header */}
      <header className="mb-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-300">
          <FaProjectDiagram className="text-yellow-400" />
          Projects
        </h2>
      </header>

      {/* Navigation Menu */}
      <nav>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300"
            >
              <FaHome className="text-blue-400" />
              <span className="text-gray-300">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-300"
            >
              <FaProjectDiagram className="text-green-400" />
              <span className="text-gray-300">All Projects</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Projects List */}
      <div className="mt-6">
        <ProjectsList />
      </div>

      {/* Sidebar Footer with GitHub Link */}
      <footer className="mt-auto text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        <a
          href="https://github.com/Gideon-Buba"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition duration-300"
        >
          <FaGithub className="text-xl" />
          <span>GitHub</span>
        </a>
      </footer>
    </div>
  );
};

export default Sidebar;
