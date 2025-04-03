import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
import CreateProject from "./components/CreateProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <CreateProject />
      <Register />
      <UserProfile />
    </div>
  );
}

export default App;
