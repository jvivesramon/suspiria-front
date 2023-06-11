import styled from "styled-components";

const PaginationStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;

  .pagination-button {
    min-width: 280px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(state) => state.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.size.medium};
    letter-spacing: 0.5px;
    border-radius: 1px;
    box-shadow: rgb(20, 20, 20) 0px 0px 10px 5px;
  }
`;

export default PaginationStyled;
