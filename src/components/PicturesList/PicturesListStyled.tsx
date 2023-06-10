import styled from "styled-components";

const PicturesListStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;
  padding: 30px;

  .picture-card {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export default PicturesListStyled;
