import axios from "axios";
import { UserCredentials } from "../../components/types";
import { errorMessage } from "../../utils/errorMessages";
import path from "../../routers/paths/paths";

const useUser = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getUserToken = async (userData: UserCredentials): Promise<string> => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}${path.user}${path.login}`,
        userData
      );

      return token;
    } catch {
      throw new Error(errorMessage.wrongCredentials);
    }
  };
  return { getUserToken };
};

export default useUser;
