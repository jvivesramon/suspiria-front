import axios from "axios";

interface UserData {
  username: string;
  password: string;
}

const useUser = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const loginUser = async (userData: UserData): Promise<string> => {
    const {
      data: { token },
    } = await axios.post<{ token: string }>(`${apiUrl}/user/login`, userData);

    return token;
  };
  return { loginUser };
};

export default useUser;
