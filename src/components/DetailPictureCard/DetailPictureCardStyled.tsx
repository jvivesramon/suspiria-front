import styled from "styled-components";

const DetailPictureCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;
  max-width: 700px;
  box-shadow: #141414 0px 0px 10px 5px;

  .data-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: 700px) {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 20px;

      &__detail {
        border-left: 1px solid white;
        padding: 30px;
      }
    }
  }

  .image-card {
    margin-top: 20px;
    object-fit: cover;
  }

  .card-title {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.size.secondaryTitle};
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    width: 100%;
    max-width: 460px;
    padding: 10px;
    line-height: 40px;
    border-bottom: 1px solid ${(props) => props.theme.colors.tertiary};

    &__author,
    &__creationDate {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-size: ${(props) => props.theme.size.details};
      color: ${(props) => props.theme.colors.white};
      text-align: center;
      padding: 10px 10px 0 10px;
    }

    &__creationDate {
      padding: 5px;
      margin-bottom: 20px;
    }
  }

  .card-description {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.size.text};
    color: ${(props) => props.theme.colors.white};
    line-height: 30px;
    padding: 5px;
    margin-bottom: 30px;
  }

  .palette-container {
    width: 100%;
    line-height: 20px;
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.size.medium};
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.black};
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
  }

  .detail-colors {
    width: 100%;
    max-width: 460px;
    margin-bottom: 30px;

    &__temperature {
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: ${(props) => props.theme.size.medium};
      color: ${(props) => props.theme.colors.white};
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &--warm {
        color: ${(props) => props.theme.colors.tertiary};
      }

      &--cold {
        color: ${(props) => props.theme.colors.logo};
      }

      &--mixed {
        color: ${(props) => props.theme.colors.ok};
      }
    }

    &__card-colors {
      display: flex;
      flex-direction: row;
      height: 30px;
      width: 100%;
      margin-bottom: 10px;
    }

    &__card-color {
      flex: 1;
    }
  }

  .colors-section {
    display: grid;
    align-items: start;
    grid-template-columns: repeat(2, 4fr);
    margin: 0px auto;
    margin-bottom: 30px;
    gap: 20px;

    @media (min-width: 700px) {
      display: grid;
      margin: 0 auto;
      gap: 50px;
      max-width: 2000px;
      align-items: start;
      margin-bottom: 30px;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .color-container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__tone {
      width: 100%;
      height: 100%;

      &--color {
        min-width: 120px;
        min-height: 130px;
        margin-bottom: 10px;
      }
    }

    &__info {
      text-align: center;
      color: ${(props) => props.theme.colors.white};
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: ${(props) => props.theme.size.medium};
    }

    &__text {
      background-color: ${(props) => props.theme.colors.black};
      line-height: 30px;
    }
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    width: 55px;
    height: 48px;
    border-radius: 5px 0 0 5px;
    box-shadow: rgb(0 0 0 / 45%) 0px 5px 15px;

    &__modify {
      top: 20px;
      background-color: ${(props) => props.theme.colors.logo};
    }

    &__delete {
      top: 88px;
      background-color: ${(props) => props.theme.colors.delete};
    }
  }
`;

export default DetailPictureCardStyled;
