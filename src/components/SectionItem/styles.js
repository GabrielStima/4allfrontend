import styled from "styled-components";

export const Styled = {
  SectionItemContainer: styled.div`
    margin: 30px 0;
    height: 400px;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    padding: 1rem;
    a {
      color: initial;
      text-decoration: none;
    }
    @media (max-width: 1024px) {
      height: 250px;
      width: 100%;
    }
    @media (max-width: 768px) {
      padding: 0.4rem;
    }
  `,
  SectionItemImg: styled.div`
    height: 400px;
    width: 100%;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    box-shadow: 1px 2px 8px #989898;
    @media (max-width: 1024px) {
      height: 250px;
    }
  `,
  SectionItemInfoContainer: styled.div`
    border-radius: 0 0 8px 8px;
    box-sizing: border-box;
    position: relative;
    top: -96px;
    width: 100%;
    height: 96px;
    padding: 12px;
    background-color: rgba(255, 255, 255, 0.8);
    .container:hover & {
      background-color: rgba(152, 152, 152, 0.9);
      color: #ffffff;
    }
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  `,
  SectionItemTitle: styled.h3`
    margin: 0;
    font-weight: 400;
  `,
  SectionItemPriceContainer: styled.div`
    margin: 5px 0 0 0;
  `,
  SectionItemOldPrice: styled.p`
    margin: 0;
    font-weight: 300;
    margin-right: 5px;
    color: #5a5a5a;
    text-decoration: line-through;
    .container:hover & {
      color: #ffffff;
    }
  `,
  SectionItemPrice: styled.p`
    margin: 0;
    font-weight: 600;
  `,
};
