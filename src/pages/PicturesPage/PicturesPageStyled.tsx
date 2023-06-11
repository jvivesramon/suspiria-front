import styled from "styled-components";

const PicturesPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 104px;
    background-color: ${(props) => props.theme.colors.black};
  }

  .total-info {
    margin-bottom: 20px;
    text-align: center;
    font-size: ${(props) => props.theme.size.medium};
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;

export default PicturesPageStyled;
