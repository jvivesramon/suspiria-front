const useLocalStorage = () => {
  const setToken = (key: string, token: string) => {
    localStorage.setItem(key, token);
  };

  const getToken = (key: string): string | null => {
    return localStorage.getItem(key);
  };

  const removeToken = (key: string) => {
    return localStorage.removeItem(key);
  };

  return { setToken, getToken, removeToken };
};

export default useLocalStorage;
