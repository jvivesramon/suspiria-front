import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import Layout from "../Layout/Layout";
import { loginUserActionCreator } from "../../store/user/userSlice";

const App = (): JSX.Element => {
  const { getToken } = useLocalStorage();
  const { getTokenUserData } = useToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken("token");

    if (!token) {
      return;
    }

    const decodedToken = getTokenUserData(token);
    dispatch(loginUserActionCreator(decodedToken));
  }, [getToken, getTokenUserData, dispatch]);

  return <Layout />;
};

export default App;
