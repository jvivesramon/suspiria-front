import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../store";
import { PictureCardStructure } from "../../types";
import path from "../../routers/paths/paths";
import { useCallback } from "react";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../store/ui/uiSlice";
import { feedbackMessages } from "../../utils/feedbackMessages/feedbackMessages";
import { actionMessage } from "../../utils/feedbackMessages/feedbackMessages";

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
      dispatch(hideLoadingActionCreator());

      dispatch(
        showModalActionCreator({
          isError: true,
          modalActionText: feedbackMessages.errorPictures,
        })
      );

      throw new Error("Sorry, we couldn't get the stories");
    }
  }, [token, dispatch]);

  const deletePicture = async (pictureId: string) => {
    try {
      dispatch(showLoadingActionCreator());
      await axios.delete(`${apiUrl}${path.pictures}/${pictureId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(hideLoadingActionCreator());

      dispatch(
        showModalActionCreator({
          isError: false,
          text: feedbackMessages.isOk,
          modalActionText: actionMessage.deleted,
        })
      );
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(
        showModalActionCreator({
          isError: true,
          text: feedbackMessages.isNotOk,
          modalActionText: actionMessage.deleted,
        })
      );
    }
  };

  const addPicture = async (
    newPicture: Partial<PictureCardStructure>
  ): Promise<{ picture: PictureCardStructure }> => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { picture },
      } = await axios.post<{ picture: PictureCardStructure }>(
        `${apiUrl}${path.pictures}`,
        newPicture
      );

      dispatch(hideLoadingActionCreator());

      dispatch(
        showModalActionCreator({
          isError: false,
          text: feedbackMessages.isOk,
          modalActionText: actionMessage.created,
        })
      );

      return { picture };
    } catch {
      dispatch(hideLoadingActionCreator());

      dispatch(
        showModalActionCreator({
          isError: true,
          text: feedbackMessages.isNotOk,
          modalActionText: actionMessage.created,
        })
      );

      throw new Error("Couldn't create the picture");
    }
  };

  return { getPictures, deletePicture, addPicture };
};

export default useApi;
