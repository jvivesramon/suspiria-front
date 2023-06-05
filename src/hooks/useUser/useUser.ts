import axios from "axios";
import { UserCredentials } from "../../components/types";
import { errorMessage } from "../../utils/errorMessages";
import path from "../../routers/paths/paths";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const useUser = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getUserToken = async (userData: UserCredentials): Promise<string> => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}${path.user}${path.login}`,
        userData
      );

      dispatch(hideLoadingActionCreator());

      return token;
    } catch {
      throw new Error(errorMessage.wrongCredentials);
    }
  };
  return { getUserToken };
};

export default useUser;
