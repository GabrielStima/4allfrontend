import styled from "styled-components";

export const Styled = {
  BagContainer: styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  EmptyCartImage: styled.img`
    width: 40%;
    heigth: 40%;
    margin: 20px 0;
  `,
  EmptyCartButtonContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
  `,
  EmptyCartButton: styled.div`
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 1px 2px 5px #989898;
    padding: 1rem;
    width: 40%;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
    font-weight: 300;
    background-color: ${(props) => props.buttonColor};
    &:hover {
      color: #ffffff;
      background-color: #989898;
    }
  `,
  BagContainerWithProducts: styled.div`
    width: 80%;
    margin-top: 3rem;
    h1 {
      margin: 0.5rem 0;
    }
    @media (max-width: 1024px) {
      width: 95%;
    }
  `,
  BagGrid: styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    @media (max-width: 1024px) {
      grid-template-columns: 75% 25%;
    }
  `,
  BagProductsContainer: styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
  `,
  BagProducts: styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    margin: 1rem;
    padding: 1rem 0;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    border-top: 1px solid #989898;
    border-bottom: 1px solid #989898;
    @media (max-width: 1024px) {
      grid-template-columns: 30% 50% 20%;
    }
  `,
  BagImageContainer: styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
  `,
  BagImage: styled.div`
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    @media (max-width: 1024px) {
      background-size: cover;
    }
  `,
  BagInfoContainer: styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    box-sizing: border-box;
    padding: 0 2rem;
  `,
  BagTitle: styled.h3``,
  BagPrice: styled.h2`
  @media (max-width: 1024px) {
    margin .5rem 0;
  }
  `,
  BagOldPrice: styled.h3`
    color: #989898;
    text-decoration: line-through;
    @media (max-width: 1024px) {
      margin .5rem 0;
    }
  `,
  BagDescription: styled.p`
    @media (max-width: 1024px) {
      font-size: 0.8rem;
    }
  `,
  BagOptionsContainer: styled.div`
    display: flex;
    justify-content: flex-end;
  `,
  BagRemoveItem: styled.span`
    cursor: pointer;
  `,
  BagResumeContainer: styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
  `,
  BagResume: styled.div`
    margin: 1rem;
    background-color: #c5c5c5;
    border-radius: 3px;
    padding: 1rem;
    box-shadow: 1px 2px 8px #989898;
  `,
  BagResumeTitle: styled.h3`
    text-align: center;
    margin: 0.5rem 0 2rem 0;
  `,
  BagResumeProduct: styled.p`
    text-align: end;
    margin-bottom: 1rem;
  `,
  BagResumeTotalValue: styled.h3`
    display: flex;
    justify-content: space-between;
  `,
  BagPurchaseButton: styled.button`
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 1px 2px 5px #989898;
    padding: 1rem;
    width: 90%;
    margin: 1rem;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 1rem;
    &:hover {
      background-color: #173957;
      color: #ffffff;
    }
  `,
};
