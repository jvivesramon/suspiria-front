import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../store";
import { PictureCardStructure, PictureTotalList } from "../../types";
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

  const getPictures = useCallback(
    async (skip: number, limit: number, filter?: string) => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { pictures, totalPictures },
        } = await axios.get<PictureTotalList>(
          `${apiUrl}${path.pictures}?limit=${limit}&skip=${skip}${
            filter && `&filter=${filter}`
          }`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(hideLoadingActionCreator());

        return { pictures, totalPictures };
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
    },
    [token, dispatch]
  );

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
        { picture: newPicture },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
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

  const getOnePicture = useCallback(
    async (id: string): Promise<PictureCardStructure> => {
      try {
        dispatch(showLoadingActionCreator());
        const {
          data: { picture },
        } = await axios.get<{
          picture: PictureCardStructure;
        }>(`${apiUrl}${path.pictures}/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        dispatch(hideLoadingActionCreator());

        return picture;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        throw new Error("Couldn't find the picture");
      }
    },
    [dispatch, token]
  );

  const getUpdatedPicture = async (
    picture: PictureCardStructure
  ): Promise<string> => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { message },
      } = await axios.put<{ message: string }>(
        `${apiUrl}${path.pictures}`,
        picture,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(hideLoadingActionCreator());

      dispatch(
        showModalActionCreator({
          isError: false,
          text: feedbackMessages.isOk,
          modalActionText: actionMessage.updated,
        })
      );

      return message;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(
        showModalActionCreator({
          isError: true,
          text: feedbackMessages.isNotOk,
          modalActionText: actionMessage.updated,
        })
      );

      throw new Error("Couldn't update the picture");
    }
  };

  return {
    getUpdatedPicture,
    getPictures,
    deletePicture,
    addPicture,
    getOnePicture,
  };
};

export default useApi;
