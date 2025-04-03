import { useState } from "react";
import { getUserById } from "../api/api";

const UserProfile = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState<any>(null);

  const fetchUser = async () => {
    const data = await getUserById(Number(userId));
    setUser(data);
  };

  return (
    <div>
      <h2>Get User by ID</h2>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
      />
      <button onClick={fetchUser}>Fetch User</button>

      {user && (
        <div>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
