export interface DecodedUserDataStructure {
  id: string;
  name: string;
}

export interface UserTokenStructure extends DecodedUserDataStructure {
  token: string;
}

export interface UserDataStructure extends UserTokenStructure {
  isLogged: boolean;
}
export interface UserCredentials {
  username: string;
  password: string;
}
