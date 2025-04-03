const USER_API_URL = "http://localhost:3000/users";

export const registerUser = async (user: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await fetch(`${USER_API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const getUserById = async (id: number) => {
  const response = await fetch(`${USER_API_URL}/${id}`);
  return response.json();
};
