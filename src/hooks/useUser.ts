import axios from "axios";
import { UserCredentials } from "../components/types";
import { errorMessage } from "../utils/errorMessages";

const useUser = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getUserToken = async (userData: UserCredentials): Promise<string> => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(`${apiUrl}/user/login`, userData);

      return token;
    } catch (error) {
      throw new Error(errorMessage.wrongCredentials);
    }
  };
  return { getUserToken };
};

export default useUser;
