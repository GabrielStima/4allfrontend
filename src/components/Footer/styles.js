import styled from "styled-components";

export const Styled = {
  FooterContainer: styled.div`
    width: 100vw;
    height: 30%;
    margin-top: 6rem;
  `,
  FooterContainerInfo: styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 20px 0;
    height: 85%;
    background-color: #173957;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    font-weight: 300;
    @media (max-width: 1024px) {
      padding: 20px;
    }
  `,
  FooterContainerInfoItems: styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1024px) {
      width: 250px;
    }
  `,
  FooterContainerCopy: styled.div`
    width: 100vw;
    height: 15%;
    display: flex;
    font-size: 0.8em;
    justify-content: center;
    background-color: #1f3344;
    align-items: center;
    color: #ffffff;
    font-weight: 300;
    padding: 0.5rem 0;
  `,
  FooterContainerInfoTitle: styled.p`
    font-size: 1.1em;
  `,
  FooterContainerInfoList: styled.ul`
    list-style: none;
    padding: 0;
  `,
  FooterContainerInfoListItem: styled.li`
    font-size: 0.9em;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `,
};
