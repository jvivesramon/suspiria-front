const useLocalStorage = () => {
  const setToken = (key: string, token: string) => {
    localStorage.setItem(key, token);
  };

  const getToken = (key: string): string | null => {
    return localStorage.getItem(key);
  };

  return { setToken, getToken };
};

export default useLocalStorage;
