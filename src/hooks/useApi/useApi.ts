import axios from "axios";
import { useAppSelector } from "../../store";
import { PictureCardStructure } from "../../types";
import path from "../../routers/paths/paths";
import { useCallback } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const { token } = useAppSelector((state) => state.userStore);

  const getPictures = useCallback(async (): Promise<PictureCardStructure[]> => {
    try {
      const {
        data: { pictures },
      } = await axios.get(`${apiUrl}${path.pictures}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return pictures;
    } catch {
      throw new Error("Sorry, we couldn't get the stories");
    }
  }, [token]);

  return { getPictures };
};

export default useApi;
