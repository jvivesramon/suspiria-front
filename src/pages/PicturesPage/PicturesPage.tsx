import { useEffect, useState } from "react";
import PicturesList from "../../components/PicturesList/PicturesList";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadPicturesActionCreator } from "../../store/pictures/picturesSlice";
import PicturesPageStyled from "./PicturesPageStyled";
import Pagination from "../../components/Pagination/Pagination";
import PicturesFilter from "../../components/PicturesFilter/PicturesFilter";

const PicturesPage = (): React.ReactElement => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const { totalPictures } = useAppSelector((store) => store.picturesStore);

  const dispatch = useAppDispatch();
  const { getPictures } = useApi();

  useEffect(() => {
    (async () => {
      const pictures = await getPictures(currentPage);

      setTotalPages(Math.round(pictures.totalPictures / 6));

      dispatch(loadPicturesActionCreator(pictures));
    })();
  }, [getPictures, dispatch, currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <PicturesPageStyled>
      <div className="page-container">
        <img
          src="images/headerTitle/suspiria-title.svg"
          alt="Suspiria logo"
          width="144"
          height="56"
          loading="lazy"
        />
      </div>
      <PicturesFilter />
      <PicturesList />

      <span className="total-info">{`${currentPage + 1}/${totalPages}`}</span>

      <Pagination
        isNextDisabled={Math.floor(currentPage * 6) >= totalPictures}
        isPreviousDisabled={!currentPage}
        onClickNext={handleNextPage}
        onClickPrevious={handlePreviousPage}
      />
    </PicturesPageStyled>
  );
};

export default PicturesPage;
