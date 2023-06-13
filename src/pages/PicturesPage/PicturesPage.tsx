import { useEffect } from "react";
import PicturesList from "../../components/PicturesList/PicturesList";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadPicturesActionCreator } from "../../store/pictures/picturesSlice";
import PicturesPageStyled from "./PicturesPageStyled";
import Pagination from "../../components/Pagination/Pagination";
import PicturesFilter from "../../components/PicturesFilter/PicturesFilter";
import { paginationActionCreator } from "../../store/ui/uiSlice";

const PicturesPage = (): React.ReactElement => {
  const { filterData, totalPictures } = useAppSelector(
    (store) => store.picturesStore
  );
  const {
    pagination: { skip, limit },
  } = useAppSelector((store) => store.uiStore);

  const dispatch = useAppDispatch();
  const { getPictures } = useApi();

  useEffect(() => {
    (async () => {
      const pictures = await getPictures(skip, limit, filterData);

      if (pictures) {
        dispatch(loadPicturesActionCreator(pictures));
      }
    })();
  }, [getPictures, dispatch, filterData, skip, limit, totalPictures]);

  const handleNextPage = () => {
    window.scrollTo(0, 0);

    dispatch(paginationActionCreator(skip + limit));
  };

  const handlePreviousPage = () => {
    window.scrollTo(0, 0);

    if (skip) {
      dispatch(paginationActionCreator(skip - limit));
    }
  };

  return (
    <PicturesPageStyled>
      <div className="page-container">
        <img
          src="/images/headerTitle/suspiria-title.svg"
          alt="Suspiria logo"
          width="144"
          height="56"
          loading="lazy"
        />
      </div>
      <PicturesFilter />

      <PicturesList />

      {totalPictures > limit && (
        <span className="total-info">{`${skip / limit + 1}/${Math.ceil(
          totalPictures / limit
        )}`}</span>
      )}

      <Pagination
        isNextDisabled={(skip + 1) * limit >= totalPictures}
        isPreviousDisabled={!skip}
        onClickNext={handleNextPage}
        onClickPrevious={handlePreviousPage}
      />
    </PicturesPageStyled>
  );
};

export default PicturesPage;
