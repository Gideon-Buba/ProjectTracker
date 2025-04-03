import CreateTask from "./components/CreateTask";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <h1>User Management</h1>
      <Register />
      <UserProfile />
      <CreateTask />
    </div>
  );
}

export default App;
