import styled from "styled-components";

const PicturesListStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;
  padding: 20px;

  .cards-list {
    @media (min-width: 700px) {
      display: grid;
      margin: 0 auto;
      gap: 50px;
      max-width: 700px;
      align-items: start;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1000px) {
      display: grid;
      margin: 0 auto;
      gap: 50px;
      max-width: 2000px;
      align-items: start;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .picture-card {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export default PicturesListStyled;
