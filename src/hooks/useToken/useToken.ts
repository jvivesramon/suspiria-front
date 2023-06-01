import jwt_decode from "jwt-decode";
import { UserTokenStructure } from "../../components/types";

const useToken = () => {
  const getTokenUserData = (token: string): UserTokenStructure => {
    const tokenData: { name: string; sub: string } = jwt_decode(token);
    const userData: UserTokenStructure = {
      id: tokenData.sub,
      name: tokenData.name,
      token,
    };

    return userData;
  };

  return { getTokenUserData };
};

export default useToken;
