import styled from "styled-components";

const PicturesFilterStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .middle-button {
    border-left: 1px solid white;
    border-right: 1px solid white;
  }

  & > button {
    width: 100%;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.size.medium};

    :hover {
      background-color: ${(props) => props.theme.colors.tertiary};
      color: ${(props) => props.theme.colors.black};
    }
  }
`;

export default PicturesFilterStyled;