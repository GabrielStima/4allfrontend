import styled from "styled-components";

export const Styled = {
  ListProductsContainer: styled.div`
    box-sizing: border-box;
    padding: 0 30px;
    width: 100vw;
    min-height: 80vh;
    display: grid;
    grid-template-columns: 20% 80%;
    .listProductGridInfoContainer {
      box-sizing: border-box;
      padding: 0 30px;
    }
    @media (max-width: 1024px) {
      padding: 0 10px;
    }
  `,
  ListProductGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .container {
      justify-self: center;
    }
  `,
  ListProductFilter: styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 110px 30px;
    @media (max-width: 1024px) {
      padding: 120px 10px;
    }
  `,
  ListProductGridTitle: styled.h1`
    font-weight: 300;
    margin-bottom: 10px;
  `,
  ListProductGridDivider: styled.hr`
    width: 100%;
    margin: 0;
  `,
  ListProductPaginationContainer: styled.div`
    width: 100%;
    box-sizing: border-box;
    grid-column-start: 1;
    grid-column-end: 3;
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1rem 0;
    a {
      color: initial;
      text-decoration: none;
    }
    @media (max-width: 768px) {
      padding-right: 5px;
    }
  `,
  ListProductPaginationItem: styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 1px 2px 8px #989898;
    margin: 0 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    color: ${(props) => (props.selected ? "#ffffff" : "initial")};
    background-color: ${(props) => (props.selected ? "#919191" : "initial")};
    &:hover {
      color: white;
      background-color: #919191;
    }
  `,
};
