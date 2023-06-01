import jwt_decode from "jwt-decode";
import { DecodedUserDataStructure } from "../../components/types";

const useToken = () => {
  const getTokenUserData = (token: string): DecodedUserDataStructure => {
    const tokenData: { name: string; sub: string } = jwt_decode(token);
    const userData: DecodedUserDataStructure = {
      id: tokenData.sub,
      name: tokenData.name,
    };

    return userData;
  };

  return { getTokenUserData };
};

export default useToken;
