import styled from "styled-components";

const PictureCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 280px;
  box-shadow: #141414 0px 0px 10px 5px;

  .card-title {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.size.secondaryTitle};
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    padding: 10px;
    line-height: 40px;
    border-bottom: 1px solid ${(props) => props.theme.colors.logo};

    &__author {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: ${(props) => props.theme.size.details};
      color: ${(props) => props.theme.colors.white};
      text-align: center;
      margin-bottom: 20px;
      padding: 10px;
    }
  }

  .card-colors {
    display: flex;
    flex-direction: row;
    height: 45px;
    width: 100%;
    margin-bottom: 10px;
  }

  .card-color {
    flex: 1;
  }
`;

export default PictureCardStyled;
