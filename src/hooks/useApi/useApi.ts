import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../store";
import { PictureCardStructure } from "../../types";
import path from "../../routers/paths/paths";
import { useCallback } from "react";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const { token } = useAppSelector((state) => state.userStore);

  const dispatch = useAppDispatch();

  const getPictures = useCallback(async (): Promise<PictureCardStructure[]> => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { pictures },
      } = await axios.get(`${apiUrl}${path.pictures}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(hideLoadingActionCreator());
      return pictures;
    } catch {
      throw new Error("Sorry, we couldn't get the stories");
    }
  }, [token, dispatch]);

  return { getPictures };
};

export default useApi;
